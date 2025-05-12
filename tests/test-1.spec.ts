import { test, expect } from '@playwright/test';
import { kmsqacm, admin } from '../Recources/Recources';

test('test', async ({ page }) => {
  await page.goto(kmsqacm.environment);
  //await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill(admin.username);
  //await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill(admin.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTitle('Content Manager').click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  await page.locator('#kms-login-to-layout-button').click();
  await expect(page).toHaveURL(
    'https://kmsqacm.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4',
  );
  await expect(page.getByRole('link', { name: 'Go to the home page' })).toBeVisible();
  const fuckingrightclickmousebutton = await page.locator(
    '#cmTree > ul > li:nth-child(4) > span > button > span.tree-item-title',
  );
  await fuckingrightclickmousebutton.click();
  await fuckingrightclickmousebutton.click({ button: 'right' });
  await page.waitForTimeout(500);
  //await page.getByRole('button', { name: 'Ruby [145]' }).click({ button: 'left' });
  //wait expect(page.locator('#cmTreeMenu_create')).toBeVisible();
  //await page.locator('#cmTreeMenu_create > a').click();
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
    .fill('AE offline item');
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('listbox', { name: 'Change status to' })
    .getByRole('img')
    .click();
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
    .locator('div')
    .filter({ hasText: /^Offline$/ })
    .first()
    .click();
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByLabel('Change status to')
    .getByRole('list')
    .getByText('Offline')
    .click();
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
    .getByRole('option', { name: 'Offline' })
    .locator('span')
    .nth(1)
    .click();
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
    .getByRole('option', { name: 'Offline' })
    .locator('span')
    .nth(1)
    .click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('link', { name: 'Ruby' }).click();
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
    .filter({ hasText: 'Playwright-tests[2]' })
    .getByLabel('Expand Folder')
    .click();
  await page.getByRole('button', { name: 'AE offline item' }).click();
});
