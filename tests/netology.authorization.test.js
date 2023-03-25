import { test, expect } from '@playwright/test';
const Value = require('../user.js');
const invalidValues = { 
    mail: "paul13@gmail.com", 
    pass: "qwerty"
};


test('Succesfuly authorization', async ({ page }) => {
  await page.goto('https://netology.ru/?modal=sign_in', {timeout: 100000});
  await expect(page.getByPlaceholder('Email')).toBeEnabled();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(Value.mail);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(Value.password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByText('heading', { name: 'Мои курсы и профессии' })).toBeVisible();
});

test('Invaild values', async ({page}) => {
    await page.goto('https://netology.ru/?modal=sign_in', {timeout: 100000});
    await expect(page.getByPlaceholder('Email')).toBeEnabled();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(invalidValues.mail);
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill(invalidValues.password);
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByText("text=Вы ввели неправильно логин или пароль")).toBeVisible;
});