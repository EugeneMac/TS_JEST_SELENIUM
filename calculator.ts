import { By, until } from "selenium-webdriver";
import { BasePage } from "./base_page";
const Selectors = require("./selectors");
const selectors = new Selectors();
export abstract class Calculator implements BasePage {

    async consent() {
        await BasePage.driver.findElement(By.xpath(selectors.consentButton)).click();
    }

    async enterNumber(number: string) {
        for (const chr of number.split("")) {
            await BasePage.driver.findElement(By.id("Btn" + chr)).click();
        }
        return this;
    }

    async clear() {
        await BasePage.driver.findElement(By.xpath(selectors.clearButton)).click();
        return this;
    }

    async equals() {
        await BasePage.driver.findElement(By.xpath(selectors.equalsButton)).click();
        return this;
    }

    async plus() {
        await BasePage.driver.findElement(By.xpath(selectors.plusButton)).click();
        return this;
    }

    async minus() {
        await BasePage.driver.findElement(By.xpath(selectors.minusButton)).click();
        return this;
    }

    async multiply() {
        await BasePage.driver.findElement(By.xpath(selectors.multButton)).click();
        return this;
    }

    async divide() {
        await BasePage.driver.findElement(By.xpath(selectors.divButton)).click();
        return this;
    }

    async sign() {
        await BasePage.driver.findElement(By.xpath(selectors.signButton)).click();
        return this;
    }

    // Since Selenium webdriver in JS/TS doesn't provide wait.until the element attribute is equal to something, I wrote my simple version
    async checkResult(result: string) {
        let i = 10;
        while (i-- > 0) {
            if (await BasePage.driver.findElement(By.xpath(selectors.resultField)).getAttribute("value") == result) return true;
            await setTimeout(() => {}, 1000);
        }
        return false;
    }
}
module.exports = Calculator;