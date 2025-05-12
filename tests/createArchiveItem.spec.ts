import { test, expect } from '@playwright/test';
import { kmsqacm, admin } from '../Recources/Recources';

const DateNow: Date = new Date();
const randomTitle = 'Item ' + DateNow;

test('Create Archive item', async ({ page }) => {
  await page.goto(kmsqacm.environment);
  await page.getByRole('textbox', { name: 'Username*' }).fill(admin.username);
  await page.getByRole('textbox', { name: 'Password*' }).fill(admin.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTitle('Content Manager').click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  await page.locator('#kms-login-to-layout-button').click();
  await expect(page).toHaveURL(
    'https://kmsqacm.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4',
  );
  await expect(page.getByRole('link', { name: 'Go to the home page' })).toBeVisible();
  await page.getByRole('button', { name: 'New Item' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('general');
  await page.getByText('General', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('heading', { name: 'New Item' })
    .click();
  await page.waitForTimeout(1500);
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('input[name="inplace_value"]')
    .fill(randomTitle); 
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('div')
    .filter({ hasText: /^Offline$/ })
    .first()
    .click(); 
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('listbox', { name: 'Change status to' })
    .getByRole('img')
    .click();
  await page.waitForTimeout(500);
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('option', { name: 'Archive' })
    .locator('span')
    .nth(1)
    .click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page
    .getByRole('listitem')
    .filter({ hasText: /^Ruby$/ })
    .locator('span')
    .nth(1)
    .click();
  await page.waitForTimeout(500);
  await page.getByRole('link', { name: 'Playwright-tests' }).click();
  await page
    .getByLabel('Select Destination Folder')
    .getByRole('button', { name: 'Save', exact: true })
    .click();
});
