let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team"); 
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 3000); // изменение теста + таймаут
  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 4000); //+ таймаут

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  }, 5000); //изменение теста для нового текста на кнопке + таймаут
}) 
// тесты дз
describe("Main github page tests",() => {
  beforeEach(async () => {
    await page.goto("https://github.com/"); 
  });
  test("Header's text", async () => {
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  }, 3000); 
  test("Free enterprise trial button text", async () => {
    const startTrialButton = await page.$("[data-test-selector='start-trial-button']");
    const buttonText = await startTrialButton.evaluate(button => button.textContent);
    expect(buttonText).toContain('Start a free enterprise trial');
  }, 2000);
  test("Sign in button text", async () => {
    const buttonSelector = ".btn-signup-mktg.btn-mktg";
    await page.waitForSelector(buttonSelector, {
      visible: true,
    });
    const actual = await page.$eval(buttonSelector, link => link.textContent);
    expect(actual).toMatch("Sign up for GitHub")
  }, 4000);
});