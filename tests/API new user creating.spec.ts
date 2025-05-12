import { test, expect } from '@playwright/test';
import { kmsqacm, admin, api_config } from '../Recources/Recources';

test('API create new user', async ({ request }) => {
  const response = await request.post(api_config.kmsqacmurl + api_config.login_api_endpoint, {
    form: { username: admin.username, password: admin.password },
  });

  expect(response.status()).toBe(200);
  const response_user_create = await request.post(
    api_config.kmsqacmurl + api_config.save_new_user_endpoint,
    {
      form: api_config.request_new_user_data,
    },
  );
  expect(response_user_create.status()).toBe(200);
});
