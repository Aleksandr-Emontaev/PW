import { test, expect } from '@playwright/test';
import { kmsqacm, admin, apiConfig } from '../Recources/Recources';

test('API create new user', async ({ request }) => {
  const response = await request.post(apiConfig.kmsqacmurl + apiConfig.loginApiEndpoint, {
    form: { username: admin.username, password: admin.password },
  });

  expect(response.status()).toBe(200);
  const responseUserCreate = await request.post(
    apiConfig.kmsqacmurl + apiConfig.saveNewUserEndpoint,
    {
      form: apiConfig.requestNewUserData,
    },
  );
  expect(responseUserCreate.status()).toBe(200);
});
