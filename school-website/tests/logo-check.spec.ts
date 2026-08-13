import { test } from '@playwright/test';

const AUDIT_URL = 'http://localhost:4321';

test('Logo pixel rendering check', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(AUDIT_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  const result = await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const logo = imgs.find((i: any) => (i.alt || '').toLowerCase().includes('logo') && i.getBoundingClientRect().width > 0 && i.getBoundingClientRect().width < 100);
    if (!logo) return { found: false };

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = 64; canvas.height = 64;
    try {
      ctx.drawImage(logo as any, 0, 0, 64, 64);
      const data = ctx.getImageData(0, 0, 64, 64).data;
      let nonTransparent = 0;
      let colored = 0;
      for (let i = 0; i < data.length; i += 4) {
        const a = data[i + 3];
        if (a > 10) nonTransparent++;
        if (a > 10 && (data[i] + data[i + 1] + data[i + 2]) > 30) colored++;
      }
      return {
        found: true,
        alt: (logo as any).alt,
        w: Math.round((logo as any).getBoundingClientRect().width),
        nonTransparentPixels: nonTransparent,
        coloredPixels: colored,
        totalPixels: 64 * 64,
        rendersContent: colored > 50,
      };
    } catch (e: any) {
      return { found: true, error: e.message };
    }
  });

  console.log('LOGO PIXEL CHECK:', JSON.stringify(result, null, 2));
});
