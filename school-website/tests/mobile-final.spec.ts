import { test, expect } from '@playwright/test';

const AUDIT_URL = 'http://localhost:4321';

test.describe('Final mobile verification (375px)', () => {
  test('No unclipped element exceeds viewport; hero copy is concise', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2500);

    const heroCopy = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const ps = Array.from(document.querySelectorAll('p')).map((p: any) => p.innerText.trim());
      const badge = Array.from(document.querySelectorAll('span')).find((s: any) => /SSC Board/.test(s.innerText));
      return {
        h1: h1 ? h1.innerText.replace(/\n/g, ' ') : '',
        badge: badge ? badge.innerText.trim() : '',
        firstParagraph: ps.find((t) => t.length > 20) || '',
      };
    });
    console.log('HERO H1:', heroCopy.h1);
    console.log('HERO BADGE:', heroCopy.badge);
    console.log('HERO PARAGRAPH:', heroCopy.firstParagraph);

    let worstUnclipped = 0;
    const steps = 14;
    for (let i = 0; i < steps; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), (i / steps) * 6500);
      await page.waitForTimeout(700);
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
        document.querySelectorAll('.scroll-reveal-item, img').forEach((el: any) => {
          const r = el.getBoundingClientRect();
          const inView = r.top < vw && r.bottom > 0;
          if (inView && r.width > 0 && !isClipped(el)) {
            m = Math.max(m, r.right - vw, vw - r.left);
          }
        });
        return m;
      }, 812);
      worstUnclipped = Math.max(worstUnclipped, max);
    }
    console.log('WORST UNCLIPPED in-viewport overflow beyond edges (px):', Math.round(worstUnclipped));

    const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    console.log('DOC SCROLL WIDTH:', docWidth, '(viewport 375)');

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/mobile-top-final.png' });
    await page.screenshot({ path: 'test-results/mobile-full-final.png', fullPage: true });

    expect(docWidth).toBeLessThanOrEqual(375);
    expect(worstUnclipped).toBeLessThanOrEqual(3);
    expect(heroCopy.badge).toContain('SSC Board');
    expect(heroCopy.firstParagraph.length).toBeLessThan(160);
  });
});
