import { test, expect } from '@playwright/test';

const AUDIT_URL = 'http://localhost:4321';

test.describe('Hero redesign verification', () => {
  test('Hero renders editorial layout, no overflow, no dead counters', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);

    // checks
    const checks = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const hasCounters = !!document.querySelector('[class*="AnimatedCounter"]');
      const pins = document.querySelectorAll('img, [class*="PinTile"]').length;
      const docWidth = document.documentElement.scrollWidth;
      const heroH = (document.querySelector('main > div:first-child') as any)?.getBoundingClientRect().height || 0;
      return {
        h1: h1 ? h1.innerText.replace(/\n/g, ' ') : '',
        hasCounters,
        docWidth,
        heroH: Math.round(heroH),
      };
    });
    console.log('HERO H1:', checks.h1);
    console.log('HAS COUNTERS (should be false):', checks.hasCounters);
    console.log('DOC WIDTH:', checks.docWidth, 'HERO HEIGHT:', checks.heroH);

    let worstUnclipped = 0;
    for (let i = 0; i < 12; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), (i / 12) * 6500);
      await page.waitForTimeout(500);
      const max = await page.evaluate((vw) => {
        const isClipped = (el: any): boolean => {
          let n = el.parentElement;
          while (n) {
            const o = getComputedStyle(n).overflowX;
            if (o === 'hidden' || o === 'clip' || o === 'auto' || o === 'scroll') return true;
            n = n.parentElement;
          }
          return false;
        };
        let m = 0;
        document.querySelectorAll('.scroll-reveal-item, img, section > div').forEach((el: any) => {
          const r = el.getBoundingClientRect();
          if (r.top < vw && r.bottom > 0 && r.width > 0 && !isClipped(el)) {
            m = Math.max(m, r.right - vw, vw - r.left);
          }
        });
        return m;
      }, 812);
      worstUnclipped = Math.max(worstUnclipped, max);
    }
    console.log('WORST UNCLIPPED overflow (px):', Math.round(worstUnclipped));

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'test-results/hero-mobile.png' });

    // desktop screenshot
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'test-results/hero-desktop.png' });

    expect(checks.hasCounters).toBe(false);
    expect(checks.docWidth).toBeLessThanOrEqual(375);
    expect(worstUnclipped).toBeLessThanOrEqual(3);
  });
});
