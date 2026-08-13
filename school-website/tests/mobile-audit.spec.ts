import { test, expect } from '@playwright/test';

const AUDIT_URL = 'http://localhost:4321';

test.describe('Mobile UI/UX Audit (375px)', () => {
  test('Capture mobile screenshots and detect overflow', async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });

    for (let i = 0; i < 12; i++) {
      await page.waitForTimeout(1000);
      const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      if (docWidth <= 376) break;
    }

    await page.waitForTimeout(2000);

    const viewportWidth = 375;

    const overflow = await page.evaluate((vw) => {
      const result: { tag: string; cls: string; width: number; right: number; left: number }[] = [];
      document.querySelectorAll('*').forEach((el: any) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && (rect.right > vw + 1 || rect.left < -1)) {
          result.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 90),
            width: Math.round(rect.width),
            right: Math.round(rect.right),
            left: Math.round(rect.left),
          });
        }
      });
      return result.slice(0, 30);
    }, viewportWidth);

    console.log('=== OVERFLOWING ELEMENTS (mobile 375px) ===');
    if (overflow.length === 0) {
      console.log('  None detected');
    } else {
      overflow.forEach((o, i) => {
        console.log(`  ${i + 1}. <${o.tag}> w=${o.width} left=${o.left} right=${o.right} | ${o.cls}`);
      });
    }

    const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const heroHeight = await page.evaluate(() => {
      const hero = document.querySelector('main > div:first-child');
      return hero ? Math.round(hero.getBoundingClientRect().height) : 0;
    });

    console.log(`\nDocument scrollWidth: ${docWidth} (viewport 375)`);
    console.log(`Hero height: ${heroHeight}`);

    await page.screenshot({ path: 'test-results/mobile-full.png', fullPage: true });
    await page.screenshot({ path: 'test-results/mobile-top.png' });

    console.log('\nScreenshots saved: mobile-full.png, mobile-top.png');

    (testInfo as any).attachments = [
      { name: 'overflow-report', contentType: 'application/json', body: Buffer.from(JSON.stringify({ docWidth, heroHeight, overflow }, null, 2)) },
    ];
  });

  test('Logo visibility check on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);

    const logos = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter((img: any) => (img.getAttribute('src') || '').includes('logo') || (img.alt || '').toLowerCase().includes('logo'))
        .map((img: any) => ({
          src: img.src,
          alt: img.alt,
          naturalW: img.naturalWidth,
          naturalH: img.naturalHeight,
          complete: img.complete,
          w: Math.round(img.getBoundingClientRect().width),
          h: Math.round(img.getBoundingClientRect().height),
          visible: img.getBoundingClientRect().width > 0 && img.getBoundingClientRect().height > 0,
          opacity: getComputedStyle(img).opacity,
          parentBg: getComputedStyle(img.parentElement).backgroundColor,
        }));
    });

    console.log('=== LOGOS FOUND (mobile) ===');
    logos.forEach((l, i) => {
      console.log(`  ${i + 1}. alt="${l.alt}" loaded=${l.complete} nat=${l.naturalW}x${l.naturalH} render=${l.w}x${l.h} visible=${l.visible} opacity=${l.opacity}`);
    });
  });
});
