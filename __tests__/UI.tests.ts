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

  it.each([["123", "456", "579"], ["120", "-100", "20"], ["25.501", "5.0013", "30.5023"]])
  ("Should calculate addition: %s + %s = %s", async (a, b, expected) => {
    await calculator.enterNumber(a);
    await calculator.plus();
    await calculator.enterNumber(b);
    await calculator.equals();
    expect(await calculator.checkResult(expected)).toBeTruthy();
  });

  it.each([["456", "123", "333"], ["0.000013", "1.01", "-1.009987"]])
  ("Should calculate subtraction: %s - %s = %s", async (a, b, expected) => {
    await calculator.enterNumber(a);
    await calculator.minus();
    await calculator.enterNumber(b);
    await calculator.equals();
    expect(await calculator.checkResult(expected)).toBeTruthy();
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

  it.each([["456", "123", "-579"], ["0.0012", "0.3", "-0.3012"]])
  ("Should calculate subtraction with negative numbers: -%s - %s = %s", async (a, b, expected) => {
    await calculator.enterNumber(a);
    await calculator.sign();
    await calculator.minus();
    await calculator.enterNumber(b);
    await calculator.equals();
    expect(await calculator.checkResult(expected)).toBeTruthy();
  });

  it("Should show error on 0 division", async () => {
    await calculator.enterNumber("123456");
    await calculator.divide();
    await calculator.enterNumber("0");
    await calculator.equals();
    expect(await calculator.checkResult("Error: DivByZero")).toBeTruthy();
  });

});
