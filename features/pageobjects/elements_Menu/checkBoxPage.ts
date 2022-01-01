class CheckBoxPage {
    get checkBoxButton() { return $('//span[text()="Check Box"]') }
    async clickOnCheckBoxButton() {
        await this.checkBoxButton.click();
    }
    get checkBoxHeader() { return $('//div[text()="Check Box"]') }
    get chechBox() { return $('.rct-checkbox') }
    async clickOnCheckBox() {
        await this.chechBox.click();
    }
}
export default new CheckBoxPage()