const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(70000);
  await page.goto("https://qamid.tmweb.ru/client/index.php");
  await page.waitForSelector("h1");
  await clickElement(page, "a:nth-child(2)");
  await clickElement(
    page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a"
  );
});

afterEach(() => {
  page.close();
}); 

describe(" Booking cinema tickets tests", () => {
  let availableSeatsSelector =
    ".buying-scheme__chair_standart:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)";
  let availableVipSeatsSelector = 
  ".buying-scheme__chair_vip:not(.buying-scheme__chair_vip_taken, .buying-scheme__chair_selected)";

   test("Title test'", async () => {
    const title = await page.title();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('ИдёмВКино');
  }, 50000);

  test("Should book some seats", async () => {
    await clickElement(page, availableSeatsSelector);
    await clickElement(page, availableSeatsSelector);
    await clickElement(page, availableSeatsSelector);
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Should book vip seats", async () => {
    await clickElement(page, availableVipSeatsSelector);
    await clickElement(page, availableVipSeatsSelector);
    await clickElement(page, "button.acceptin-button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:"); 
  });

  test("Try to book unavailable seat", async () => {
    await clickElement(page, ".buying-scheme__chair_taken");
    const actual = await page.$eval(".acceptin-button", (link) =>
      link.getAttribute("disabled")
    );
    expect(actual).toEqual("true");
  });
});
