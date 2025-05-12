import { test, expect } from '@playwright/test';
import { kmsqacm, admin, api_config } from '../Recources/Recources';

test('API create new user', async ({ request }) => {
  const response = await request.post(api_config.kmsqacmurl + api_config.login_api_endpoint, {
    form: { username: admin.username, password: admin.password },
  });

  expect(response.status()).toBe(200); // 200 OK (login is OK)
  const response_user_create = await request.post(
    api_config.kmsqacmurl + api_config.save_new_user_enpoint,
    {
      form: api_config.request_new_user_data,
    },
  );
  expect(response_user_create.status()).toBe(200); // 200 OK (login is OK)
  const body = await response_user_create.json();
});

/*test('login into kmsqacm', async ({ page }) => {
  await page.goto(kmsqacm.environment);
  await page.getByRole('textbox', { name: 'Username*' }).fill(admin.username);
  await page.getByRole('textbox', { name: 'Password*' }).fill(admin.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTitle('Content Manager').click();
  await page.getByRole('listbox').getByRole('option', { name: 'Administrator' }).click();
  await page.locator('#kms-login-to-layout-button').click();
  await expect(page).toHaveURL(
    'https://kmsqacm.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=3',
  );
  await expect(page.getByRole('link', { name: 'Go to the home page' })).toBeVisible();*/

/* / 'https://kmsqacm.lighthouse-cloud.com/kms/lh/api/login?password=${admin.password}&username={admin.username}',
  // 2. Отправляем POST-запрос с логином и паролем
  const response = await request.post(
    'https://kmsqacm.lighthouse-cloud.com/kms/lh/login/post?password=admin&username=admin',
    {
      data: credentials,
    },
  );

  // 3. Проверяем, что сервер ответил 200 OK (означает, что логин успешен)
  expect(response.status()).toBe(200);

  // 4. Получаем и проверяем тело ответа
  const body = await response.json();

  // 5. Ожидаем, что сервер вернет token (или другой ключ, например, accessToken)
  expect(body).toHaveProperty('token');
  expect(typeof body.token).toBe('string');

  // 6. (Дополнительно) Можно проверить, что токен реально что-то содержит
  expect(body.token.length).toBeGreaterThan(0);

  const userdata = {
    prof_username: 'aepwuser',
    prof_password: 'Aepwuser!',
    prof_fname: 'aepwuser',
    prof_lname: 'aepwuser',
    prof_interest_group_id: 0,
    pggroup_id: 1.0,
  };

  const response = await request.post(
    'https://kmsqacm.lighthouse-cloud.com/kms/lh/auth/profile/save',
    {
      data: userdata,
    },
  );

  expect(response.status()).toBe(200);

  /*test('Добавление нового пользователя', async ({ request }) => {
    const newUser = {
      name: 'Илья',
      email: 'ilya@example.com',
    };

    // Отправляем POST-запрос. Указываем в теле данные пользователя.
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: newUser,
    });

    // Статус 201 — "создано"
    expect(response.status()).toBe(201);

    // Проверяем, что в ответе вернулись наши данные
    const user = await response.json();
    expect(user.name).toBe('Илья');
    expect(user.email).toBe('ilya@example.com');
  });*/
//});

// e9325183-d948-4f05-b903-fe08fead8ed9 e9325183-d948-4f05-b903-fe08fead8ed9
