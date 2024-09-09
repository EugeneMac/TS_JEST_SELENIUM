import { By } from "selenium-webdriver";
const BasePage = require("../base_page");
const Selectors = require("../selectors");
const Calculator = require("../calculator");
const calculator = new Calculator();

describe("Sandbox", () => {
  beforeAll(async () => {
    await BasePage.navigate();
  }, 30000);

  afterAll(async () => {
    await BasePage.quit();
  });

  it("Should calculate addition", async () => {
    await calculator.enterNumber("123");
    await calculator.plus();
    await calculator.enterNumber("456");
    await calculator.equals();
    expect(await calculator.checkResult("579")).toBeTruthy();
 
    // expect(title).toEqual("Sandbox");
    // expect(await header.getText()).toEqual("Sandbox");
  });
});
