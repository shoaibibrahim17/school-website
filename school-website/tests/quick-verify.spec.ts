import { test, expect } from '@playwright/test';

const AUDIT_URL = 'http://localhost:4321';

test.describe('Quick Responsive Verification', () => {
  test('Mobile layout is correct', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    
    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(1000);
      const heroHeight = await page.evaluate(() => {
        const hero = document.querySelector('main > div:first-child');
        if (hero) {
          const rect = hero.getBoundingClientRect();
          return Math.round(rect.height);
        }
        return 0;
      });
      console.log(`Attempt ${i + 1}: Hero height = ${heroHeight}px`);
      if (heroHeight > 300) break;
    }

    const finalHeroHeight = await page.evaluate(() => {
      const hero = document.querySelector('main > div:first-child');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        return Math.round(rect.height);
      }
      return 0;
    });
    console.log(`Final hero height: ${finalHeroHeight}px`);
    expect(finalHeroHeight).toBeGreaterThan(300);
  });

  test('Desktop layout has no overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(5000);

    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const viewportWidth = 1440;
    console.log(`Document width: ${documentWidth}, Viewport: ${viewportWidth}`);
    expect(documentWidth).toBeLessThanOrEqual(viewportWidth + 5);
  });

  test('No broken images', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(5000);

    const brokenImages = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      return Array.from(imgs).filter((img: any) => !img.complete || img.naturalWidth === 0).map((img: any) => img.src);
    });

    console.log(`Broken images: ${brokenImages.length}`);
    expect(brokenImages.length).toBe(0);
  });
});
