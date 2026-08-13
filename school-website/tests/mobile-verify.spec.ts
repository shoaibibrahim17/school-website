import { test, expect } from '@playwright/test';

const AUDIT_URL = 'http://localhost:4321';

test.describe('Mobile verification (375px)', () => {
  test('Logo now loads as PNG + no placeholder overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(4000);

    const logo = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const nav = imgs.find((i: any) => (i.alt || '').toLowerCase().includes('logo') && i.getBoundingClientRect().width > 0 && i.getBoundingClientRect().width < 100);
      if (!nav) return { found: false };
      return {
        found: true,
        src: (nav as any).src,
        renders: (nav as any).naturalWidth > 0,
        w: Math.round((nav as any).getBoundingClientRect().width),
      };
    });
    console.log('NAVBAR LOGO:', JSON.stringify(logo));

    const overflow = await page.evaluate((vw) => {
      const bad: { tag: string; cls: string; w: number; left: number; right: number }[] = [];
      document.querySelectorAll('*').forEach((el: any) => {
        const r = el.getBoundingClientRect();
        const isPlaceholder =
          (el.className || '').toString().includes('scroll-reveal-item') ||
          (el.className || '').toString().includes('PlaceholderImage') ||
          (el.tagName || '').toLowerCase() === 'img';
        if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
          bad.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 70),
            w: Math.round(r.width),
            left: Math.round(r.left),
            right: Math.round(r.right),
          });
        }
      });
      return bad.slice(0, 25);
    }, 375);
    console.log('OVERFLOW (placeholders/imgs):', JSON.stringify(overflow, null, 2));

    const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    console.log('DOC SCROLL WIDTH:', docWidth);

    await page.screenshot({ path: 'test-results/mobile-hero-fixed.png' });
    await page.screenshot({ path: 'test-results/mobile-full-fixed.png', fullPage: true });

    expect(logo.found).toBe(true);
    expect(logo.src).toContain('logo.png');
    expect(logo.renders).toBe(true);
  });

  test('Scroll through and confirm cards never overflow viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);

    let worst = 0;
    const steps = 12;
    for (let i = 0; i < steps; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), (i / steps) * 6000);
      await page.waitForTimeout(500);
      const max = await page.evaluate((vw) => {
        let m = 0;
        document.querySelectorAll('.scroll-reveal-item').forEach((el: any) => {
          const r = el.getBoundingClientRect();
          if (r.width > 0) {
            m = Math.max(m, r.right - vw, vw - r.left);
          }
        });
        return m;
      }, 375);
      worst = Math.max(worst, max);
    }
    console.log('WORST scroll-reveal-item overflow beyond viewport (px):', Math.round(worst));
    expect(worst).toBeLessThanOrEqual(2);
  });
});
