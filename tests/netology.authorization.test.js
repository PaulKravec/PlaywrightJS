import { test, expect } from '@playwright/test';
const user = require('../user');
const invalidValues = { 
    mail: "paul13@gmail.com", 
    pass: "qwerty"
};


test('Succesfuly authorization', async ({ page }) => {
  await page.goto('https://netology.ru/?modal=sign_in');
  await expect(page.getByPlaceholder('Email')).toBeEnabled();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(user.mail);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(user.password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByText('heading', { name: 'Мои курсы и профессии' })).toBeVisible();
});