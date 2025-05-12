import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kmsqacm.lighthouse-cloud.com/kms/lh/login');
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill('admin');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#kms-login-to-layout-button').click();
  await page.getByRole('button', { name: 'Ruby [146]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Ruby [146]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Sapphire [429]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Ruby [146]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Ruby [146]' }).click({
    button: 'right',
  });
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
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('input[name="inplace_value"]')
    .fill('teast item 1');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page
    .getByRole('listitem')
    .filter({ hasText: /^Ruby$/ })
    .locator('span')
    .nth(1)
    .click();
  await page.getByRole('link', { name: 'Playwright-tests' }).click();
  await page
    .getByLabel('Select Destination Folder')
    .getByRole('button', { name: 'Save', exact: true })
    .click();
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Ruby[146]Sorted by:' })
    .getByLabel('Expand Folder')
    .click();
  await page
    .locator('span')
    .filter({ hasText: 'Playwright-tests[1]' })
    .getByLabel('Expand Folder')
    .click();
  await page.getByRole('button', { name: 'teast item' }).click();
});
