import { test, expect } from '@playwright/test';

const BREAKPOINTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 1024, height: 1366 },
  desktop: { width: 1440, height: 900 },
};

const AUDIT_URL = 'http://localhost:4321';

const viewportIssues: { viewport: string; issue: string; severity: 'high' | 'medium' | 'low' }[] = [];
const brokenImages: { src: string; viewport: string }[] = [];
const brokenMedia: { src: string; viewport: string }[] = [];
const layoutIssues: { viewport: string; issue: string; details: string }[] = [];

async function auditViewport(page: any, name: string, viewport: { width: number; height: number }) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  console.log(`\n=== Auditing ${name} (${viewport.width}x${viewport.height}) ===`);

  const pageWidth = viewport.width;
  const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);

  if (documentWidth > pageWidth + 5) {
    const overflow = documentWidth - pageWidth;
    viewportIssues.push({ viewport: name, issue: `Horizontal overflow detected: ${overflow}px wider than viewport`, severity: 'high' });
    layoutIssues.push({ viewport: name, issue: 'Horizontal overflow', details: `Document is ${overflow}px wider than viewport (${documentWidth}px vs ${pageWidth}px)` });
  }

  const fixedElements = await page.evaluate(() => {
    const fixed = document.querySelectorAll('*');
    const results: { tag: string; cls: string; width: string; right: string }[] = [];
    fixed.forEach((el: any) => {
      const style = window.getComputedStyle(el);
      if (style.position === 'fixed') {
        const rect = el.getBoundingClientRect();
        results.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || '').toString().slice(0, 80),
          width: `${Math.round(rect.width)}px`,
          right: style.right,
        });
      }
    });
    return results;
  });

  for (const el of fixedElements) {
    if (parseFloat(el.right) < -50 && el.tag !== 'svg') {
      viewportIssues.push({ viewport: name, issue: `Fixed element "${el.tag}" clipped off-screen: right=${el.right}, width=${el.width}`, severity: 'medium' });
      layoutIssues.push({ viewport: name, issue: 'Fixed element off-screen', details: `Element ${el.tag} (${el.cls}) has right=${el.right}, width=${el.width}` });
    }
  }

  const images = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).map((img: any) => ({
      src: img.src || img.getAttribute('src') || '',
      alt: img.alt || '',
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      loaded: img.complete && img.naturalWidth > 0,
    }));
  });

  for (const img of images) {
    if (!img.loaded && img.src && !img.src.includes('data:')) {
      brokenImages.push({ src: img.src, viewport: name });
    }
  }

  const videos = await page.evaluate(() => {
    const vids = document.querySelectorAll('video');
    return Array.from(vids).map((v: any) => ({
      src: v.src || v.querySelector('source')?.src || '',
      readyState: v.readyState,
    }));
  });

  for (const vid of videos) {
    if (vid.src && vid.readyState < 2) {
      brokenMedia.push({ src: vid.src, viewport: name });
    }
  }

  const heroSection = await page.$('header, nav, [class*="hero"], [class*="Hero"]');
  if (heroSection) {
    const heroBox = await heroSection.boundingBox();
    if (heroBox) {
      if (name === 'mobile' && heroBox.height < 300) {
        layoutIssues.push({ viewport: name, issue: 'Hero section too short on mobile', details: `Hero height: ${Math.round(heroBox.height)}px (expected >300px)` });
      }
      if (heroBox.width < viewport.width * 0.9) {
        layoutIssues.push({ viewport: name, issue: 'Hero section not full-width', details: `Hero width: ${Math.round(heroBox.width)}px vs viewport: ${viewport.width}px` });
      }
    }
  }

  const nav = await page.$('nav');
  if (nav) {
    const navBox = await nav.boundingBox();
    if (navBox && navBox.width < viewport.width * 0.8) {
      layoutIssues.push({ viewport: name, issue: 'Navbar not utilizing full width', details: `Navbar width: ${Math.round(navBox.width)}px vs viewport: ${viewport.width}px` });
    }
  }

  const cards = await page.$$('[class*="rounded-"], article');
  let overlappingCards = 0;
  for (let i = 0; i < Math.min(cards.length, 10); i++) {
    const box1 = await cards[i].boundingBox();
    if (!box1) continue;
    for (let j = i + 1; j < Math.min(cards.length, 10); j++) {
      const box2 = await cards[j].boundingBox();
      if (!box2) continue;
      if (box1.y < box2.y + box2.height && box1.y + box1.height > box2.y &&
          box1.x < box2.x + box2.width && box1.x + box1.width > box2.x) {
        overlappingCards++;
      }
    }
  }
  if (overlappingCards > 0) {
    layoutIssues.push({ viewport: name, issue: `${overlappingCards} overlapping card pairs detected`, details: 'Cards may have incorrect z-index or positioning' });
  }

  const textContrastIssues = await page.evaluate(() => {
    const issues: { selector: string; color: string; bg: string }[] = [];
    const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button, label');
    const seen = new Set<string>();

    textElements.forEach((el: any) => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const bg = style.backgroundColor;
      const key = `${color}-${bg}`;
      if (seen.has(key)) return;
      seen.add(key);

      if (color.includes('255') && color.includes('255') && color.includes('255') && bg.includes('255') && bg.includes('255')) {
        issues.push({ selector: el.tagName.toLowerCase(), color, bg });
      }
    });
    return issues.slice(0, 5);
  });

  for (const issue of textContrastIssues) {
    viewportIssues.push({ viewport: name, issue: `Potential low contrast: ${issue.color} on ${issue.bg}`, severity: 'medium' });
  }

  const touchTargets = await page.evaluate(() => {
    const targets: { tag: string; width: number; height: number }[] = [];
    const interactive = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    interactive.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      targets.push({
        tag: el.tagName.toLowerCase(),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    });
    return targets.filter(t => t.width < 44 || t.height < 44);
  });

  if (name === 'mobile' && touchTargets.length > 0) {
    const smallTargets = touchTargets.slice(0, 5);
    layoutIssues.push({ viewport: name, issue: `${touchTargets.length} touch targets smaller than 44x44px`, details: `Examples: ${smallTargets.map(t => `${t.tag}(${t.width}x${t.height})`).join(', ')}` });
  }

  const viewportMeta = await page.evaluate(() => {
    const meta = document.querySelector('meta[name="viewport"]');
    return meta ? meta.getAttribute('content') : 'not found';
  });

  if (!viewportMeta.includes('width=device-width')) {
    viewportIssues.push({ viewport: name, issue: 'Missing responsive viewport meta tag', severity: 'high' });
  }

  console.log(`  Fixed elements: ${fixedElements.length}`);
  console.log(`  Images checked: ${images.length}`);
  console.log(`  Videos checked: ${videos.length}`);
  console.log(`  Touch target issues: ${touchTargets.length}`);
  console.log(`  Layout issues: ${layoutIssues.filter(i => i.viewport === name).length}`);
}

test.describe('Comprehensive Responsive Audit', () => {
  test.beforeEach(async ({ page }) => {
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
    });
  });

  test('Audit Mobile Layout (375x812)', async ({ page }) => {
    await auditViewport(page, 'mobile', BREAKPOINTS.mobile);
  });

  test('Audit Tablet Layout (1024x1366)', async ({ page }) => {
    await auditViewport(page, 'tablet', BREAKPOINTS.tablet);
  });

  test('Audit Desktop Layout (1440x900)', async ({ page }) => {
    await auditViewport(page, 'desktop', BREAKPOINTS.desktop);
  });

  test('Verify no broken assets across all viewports', async ({ page }) => {
    for (const [name, viewport] of Object.entries(BREAKPOINTS)) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(3000);

      const failedAssets = await page.evaluate(() => {
        const results: { tag: string; src: string; type: string }[] = [];

        document.querySelectorAll('img').forEach((img: any) => {
          if (!img.complete || img.naturalWidth === 0) {
            results.push({ tag: 'img', src: img.src || img.getAttribute('src') || '', type: 'image' });
          }
        });

        document.querySelectorAll('source').forEach((source: any) => {
          results.push({ tag: 'source', src: source.src || source.getAttribute('src') || '', type: 'media' });
        });

        document.querySelectorAll('video').forEach((vid: any) => {
          if (vid.readyState < 2) {
            results.push({ tag: 'video', src: vid.src || '', type: 'video' });
          }
        });

        return results;
      });

      for (const asset of failedAssets) {
        brokenImages.push({ src: asset.src, viewport: name });
      }
    }
  });

  test.afterAll(async () => {
    console.log('\n\n========================================');
    console.log('AUDIT SUMMARY');
    console.log('========================================\n');

    console.log('VIEWPORT ISSUES:');
    if (viewportIssues.length === 0) {
      console.log('  None detected');
    } else {
      viewportIssues.forEach((issue, i) => {
        console.log(`  ${i + 1}. [${issue.viewport}] ${issue.issue} (${issue.severity})`);
      });
    }

    console.log('\nBROKEN IMAGES:');
    if (brokenImages.length === 0) {
      console.log('  None detected');
    } else {
      const unique = [...new Set(brokenImages.map(i => i.src))];
      unique.forEach((src, i) => {
        console.log(`  ${i + 1}. ${src}`);
      });
    }

    console.log('\nBROKEN MEDIA:');
    if (brokenMedia.length === 0) {
      console.log('  None detected');
    } else {
      brokenMedia.forEach((media, i) => {
        console.log(`  ${i + 1}. ${media.src} (${media.viewport})`);
      });
    }

    console.log('\nLAYOUT ISSUES:');
    if (layoutIssues.length === 0) {
      console.log('  None detected');
    } else {
      layoutIssues.forEach((issue, i) => {
        console.log(`  ${i + 1}. [${issue.viewport}] ${issue.issue}: ${issue.details}`);
      });
    }

    console.log('\n========================================\n');

    if (viewportIssues.some(i => i.severity === 'high') || brokenImages.length > 0) {
      throw new Error('Critical issues found during audit');
    }
  });
});
