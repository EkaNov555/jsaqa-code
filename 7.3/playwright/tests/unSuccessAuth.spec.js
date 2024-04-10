const { test, expect, chromium } = require("@playwright/test");
const {wrongusername, wrongpassword} = require("./user.js");

test("Неуспешная авторизация", async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');
  await page.getByPlaceholder('Email').click();
  await page.fill('[placeholder="Email"]', (wrongusername));
  await page.getByPlaceholder('Пароль').click();
  await page.fill('[placeholder="Пароль"]', (wrongpassword));
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
});