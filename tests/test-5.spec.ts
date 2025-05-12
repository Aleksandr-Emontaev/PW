import { test, expect, selectors } from '@playwright/test';

test('create Offline item', async ({ page }) => {
  await page.goto('https://kmsqacm.lighthouse-cloud.com/kms/lh/login');
  await page.waitForTimeout(10000);
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill('admin');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTitle('Content Manager').click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  await page.locator('#kms-login-to-layout-button').click();
  await expect(page).toHaveURL(
    'https://kmsqacm.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4',
  );
  await expect(page.getByRole('link', { name: 'Go to the home page' })).toBeVisible();
  const fuckingrightclickmousebutton = await page
    .getByRole('button', { name: 'Ruby' })
    .click({ button: 'right' });
  await fuckingrightclickmousebutton.click();
  //await page.getByRole('button', { name: 'Ruby [145]' }).click({ button: 'left' });
  await page.waitForTimeout(5000);
});
