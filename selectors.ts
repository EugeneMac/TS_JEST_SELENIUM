export abstract class Selectors
{
    public consentButton = "//p[contains(.,'Consent')]";
    public plusButton = "//button[@id='BtnPlus']";
    public equalsButton = "//button[@id='BtnCalc']";
    public resultField = "//input[@id='input']";
}
module.exports = Selectors;