import { test, expect } from '@playwright/test';

test('Pirate-Demo Tests', async ({ page }) => {
  await test.step('App Login', async () => {
    await page.goto('/login.html');
    await page.getByRole('textbox', { name: 'Captain:' }).fill('JackSparrow');
    await page.getByRole('textbox', { name: 'Passwort:' }).fill('rum');
    await page.getByRole('button', { name: 'Segel setzen' }).click();
    await expect(page).toHaveURL(/\/treasure\.html/);
  });
  await test.step('visit Skull Island', async () => {
    await page.getByTestId('skull').click();
    await expect(page.getByRole('heading', { name: '☠️ Only ghosts and old bones...' })).toBeVisible();
  });
  await test.step('visit Shark Bay', async () => {
    await page.getByTestId('shark').click();
    await expect(page.getByRole('heading', { name: '🦈 Just sharks here.' })).toBeVisible();
  });
  await test.step('find Treasure Cove', async () => {
    await page.getByTestId('treasure').click();
    await expect(page.getByRole('heading', { name: '🎉 You found the treasure!' })).toBeVisible();
  });
});

test('Bug mode: Codebeard has the treasure', async ({ page }) => {
  await page.goto('/treasure.html?bug=true');

  await test.step('Codebeard is visible', async () => {
    await expect(page.getByTestId('codebeard')).toBeVisible();
  });
  await test.step('Treasure Cove is empty', async () => {
    await page.getByTestId('treasure').click();
    await expect(page.getByRole('heading', { name: '💨 Empty chests – someone was faster!' })).toBeVisible();
  });
  await test.step('Codebeard stole the treasure', async () => {
    await page.getByTestId('codebeard').click();
    await expect(page.getByRole('heading', { name: '🎉 Captn CodeBeard stole the treasure!' })).toBeVisible();
  });
});
