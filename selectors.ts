export abstract class Selectors
{
    public consentButton = "//p[contains(.,'Consent')]";
    public plusButton = "//button[@id='BtnPlus']";
    public minusButton = "//button[@id='BtnMinus']";
    public multButton = "//button[@id='BtnMult']";
    public divButton = "//button[@id='BtnDiv']";
    public equalsButton = "//button[@id='BtnCalc']";
    public signButton = "//button[@id='BtnSign']";
    public clearButton = "//button[@id='BtnClear']";
    public resultField = "//input[@id='input']";
}
module.exports = Selectors;