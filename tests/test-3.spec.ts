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
  /*await page.locator('#cmTree > ul > li:nth-child(4) > span > button').dispatchEvent('contextmenu');
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Folder 5[77]Sorted by:' })
    .getByRole('img')
    .click({
      button: 'right',
    });*/
  await page.locator('#cmTree > ul > li:nth-child(4) > span > button').click({ button: 'right' });
  await page.locator('#cmTreeMenu_create').click();
  // await page.locator('#cmTree > ul > li:nth-child(4) > span > button').click({ button: 'right' });
  /*await page.locator('#cmTreeContextMenu1');
  await page.getByRole('button', { name: 'New Item' }).click(); //plus button
  await page.getByRole('textbox', { name: 'Search' }).click(); // click on search pane
  await page.getByRole('textbox', { name: 'Search' }).fill('General'); // fill name of the template
  await page.getByText('General', { exact: true }).click(); // Click on General template
  await page.getByRole('button', { name: 'Next' }).click(); // click Next button
  await page.getByRole('button', { name: 'Skip' }).click(); // Click Skip button
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('heading', { name: 'New Item' })
    .click(); // click on item title
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('input[name="inplace_value"]')
    .fill('AE auto 1'); // Fill the New item title
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('div')
    .filter({ hasText: /^Offline$/ })
    .first()
    .click(); //click on OFFLINE
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('listbox', { name: 'Change status to' })
    .getByRole('img')
    .click(); // click on arrow to open a dropdown
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('option', { name: 'Offline' })
    .locator('span')
    .nth(1)
    .click(); // choose Offline status
  await page.getByRole('button', { name: 'Save', exact: true }).click(); // Save on the action bar

  await page
    .getByRole('listitem')
    .filter({ hasText: /^Ruby$/ })
    .locator('span')
    .nth(1)
    .click(); //click on arrow "Ruby
  await page.waitForTimeout(500);

  await page.getByRole('link', { name: 'Playwright-tests' }).click(); //click on playwright folder

  await page
    .getByLabel('Select Destination Folder')
    .getByRole('button', { name: 'Save', exact: true })
    .click();
  // Save button on the window
  await page // Path to the folder tree
    .getByRole('listitem')
    .filter({ hasText: 'Ruby[146]Sorted by:' })
    .getByLabel('Expand Folder')
    .click();
  await page
    .locator('span')
    .filter({ hasText: 'Playwright-tests[4]' })
    .getByLabel('Expand Folder')
    .click();
  await page.getByRole('button', { name: 'AE auto' }).click();*/
});
