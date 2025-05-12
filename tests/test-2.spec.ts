import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kmsqacm.lighthouse-cloud.com/kms/lh/login');
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill('admin');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#kms-login-to-layout-button').click();
  await page.goto(
    'https://kmsqacm.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4&homePage=%2FCM%2FHOMEPAGE%2FVIEW%3FlayoutId%3D4%26isInfo%3Dyes&homePageEncoded=true',
  );
  await page.getByRole('button', { name: 'Ruby [146]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Ruby [146]' }).click({
    button: 'right',
  });
});
