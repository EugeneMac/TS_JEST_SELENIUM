const chrome = require("selenium-webdriver");
const Calculator = require("./calculator");
require('chromedriver');
const chromeCapabilities  = chrome.Capabilities.chrome();
var chromeOptions = {
  'args': ['--test-type', '--start-maximized', '--disable-search-engine-choice-screen']
};
chromeCapabilities.set('goog:chromeOptions', chromeOptions);
const calculator = new Calculator();

export abstract class BasePage {
    static driver: any = new chrome.Builder().forBrowser("chrome").withCapabilities(chromeCapabilities).build();

    static async navigate(){
        await this.driver.get("https://web2.0calc.com/");
        await calculator.consent();
    }

    static async quit(){
        await this.driver.quit();
    }
}
module.exports = BasePage;