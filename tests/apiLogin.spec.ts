import { test, expect } from '@playwright/test';
import { kmsqacm, admin, apiConfig } from '../Recources/Recources';

test('API Login', async ({ request }) => {
  const response = await request.post(apiConfig.kmsqacmurl + apiConfig.loginApiEndpoint, {
    form: { username: admin.username, password: admin.password },
  });

  expect(response.status()).toBe(200);
});
