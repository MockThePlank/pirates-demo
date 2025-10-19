import { test, expect } from '@playwright/test';

test('Pirate-Demo Tests', async ({ page }) => {
  await test.step('App Login', async () => {
    await page.goto('http://localhost:3000/login.html');
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Captain:' }).click();
    await page.getByRole('textbox', { name: 'Captain:' }).fill('JackSparrow');
    await page.getByRole('textbox', { name: 'Captain:' }).press('Tab');
    await page.getByRole('textbox', { name: 'Passwort:' }).click();
    await page.getByRole('textbox', { name: 'Passwort:' }).fill('rum');
    await page.getByRole('button', { name: 'Segel setzen' }).click();
    await page.waitForTimeout(2000);
  });
  await test.step('visit Skull Island', async () => {
    await page.getByRole('button', { name: '☠️ Skull Island' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: '☠️ Nur Knochen und Geister' })).toBeVisible();
    await page.waitForTimeout(2000);
  });
  await test.step('visit Shark Bay', async () => {
    await page.getByRole('button', { name: '🦈 Shark Bay' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: '🦈 Hier gibt’s nur Haie!' })).toBeVisible();
    await page.waitForTimeout(2000);
  });
  await test.step('find Treasure Cove', async () => {
    await page.getByRole('button', { name: '💰 Treasure Cove' }).click();await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: '🎉 Du hast den Schatz gefunden!' })).toBeVisible();
    await page.waitForTimeout(2000);
  });
  
  await page.close();
});