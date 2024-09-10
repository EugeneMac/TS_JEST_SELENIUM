import { By } from "selenium-webdriver";
const BasePage = require("../base_page");
const Selectors = require("../selectors");
const Calculator = require("../calculator");
const calculator = new Calculator();

describe("Web Calculator UI-based tests", () => {
  beforeAll(async () => {
    await BasePage.navigate();
  }, 30000);

  afterAll(async () => {
    await BasePage.quit();
  });

  // clearing the calculation between each test
  beforeEach(async () => {
    await calculator.clear();
  });

  it("Should calculate addition", async () => {
    await calculator.enterNumber("123");
    await calculator.plus();
    await calculator.enterNumber("456");
    await calculator.equals();
    expect(await calculator.checkResult("579")).toBeTruthy();
  });

  it("Should calculate subtraction", async () => {
    await calculator.enterNumber("456");
    await calculator.minus();
    await calculator.enterNumber("123");
    await calculator.equals();
    expect(await calculator.checkResult("333")).toBeTruthy();
  });

  it("Should calculate multiplication", async () => {
    await calculator.enterNumber("987");
    await calculator.multiply();
    await calculator.enterNumber("654");
    await calculator.equals();
    expect(await calculator.checkResult("645498")).toBeTruthy();
  });

  it("Should calculate division", async () => {
    await calculator.enterNumber("555");
    await calculator.divide();
    await calculator.enterNumber("25");
    await calculator.equals();
    expect(await calculator.checkResult("22.2")).toBeTruthy();
  });

  it("Should calculate subtraction with negative numbers", async () => {
    await calculator.enterNumber("456");
    await calculator.sign();
    await calculator.minus();
    await calculator.enterNumber("123");
    await calculator.equals();
    expect(await calculator.checkResult("-579")).toBeTruthy();
  });

});
