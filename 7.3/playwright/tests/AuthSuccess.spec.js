const { test, expect, chromium } = require("@playwright/test");
const {username, password} = require("./user.js");

test("Успешная авторизация", async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByPlaceholder('Email').click();
  await page.fill('[placeholder="Email"]', (username));
  await page.getByPlaceholder('Пароль').click();
  await page.fill('[placeholder="Пароль"]', (password));
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveTitle('Моё обучение');
});