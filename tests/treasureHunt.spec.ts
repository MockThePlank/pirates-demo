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
    await page.getByTestId('skull').click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: '☠️ Only ghosts and old bones...' })).toBeVisible();
    await page.waitForTimeout(2000);
  });
  await test.step('visit Shark Bay', async () => {
    await page.getByTestId('shark').click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: '🦈 Just sharks here.' })).toBeVisible();
    await page.waitForTimeout(2000);
  });
  await test.step('find Treasure Cove', async () => {
    await page.getByTestId('treasure').click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('heading', { name: '🎉 You found the treasure!' })).toBeVisible();
    await page.waitForTimeout(2000);
  });
});