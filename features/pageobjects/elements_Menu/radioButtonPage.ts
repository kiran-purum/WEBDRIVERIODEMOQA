class RadioButtonPage {
    get radioButton() { return $('//span[text()="Radio Button"]') }
    async clickOnRadioButton() {
        await this.radioButton.click();
    }
    get radioButtonHeader() { return $('//div[text()="Radio Button"]') }
    get radio() { return $('#yesRadio') }
    async checkRadioButton() {
        await this.radio.waitForClickable();
        await this.radio.click();
    }
    get selectedText() { return $('//span[text()="Yes"]') }
}
export default new RadioButtonPage()