import { test, expect } from '@playwright/test';
import { kmsqacm, admin, api_config } from '../Recources/Recources';

test('API Login', async ({ request }) => {
  const response = await request.post(api_config.kmsqacmurl + api_config.login_api_endpoint, {
    form: { username: admin.username, password: admin.password },
  });

  expect(response.status()).toBe(200);
});
