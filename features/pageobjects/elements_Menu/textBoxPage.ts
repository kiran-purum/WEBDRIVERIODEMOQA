class TextBoxPage {
    get textBoxButton() { return $('//span[text()="Text Box"]') }
    get textBoxHeader() { return $('.main-header') }
    get fullname() { return $('//input[@placeholder="Full Name"]') }
    get emailAddress() { return $('//input[@placeholder="name@example.com"]') }
    get currentAdd() { return $('//textarea[@placeholder="Current Address"]') }
    get permanentAdd() { return $('#permanentAddress') }
    get submitButton() { return $('//*[@id="submit"]') }

    async clickOnTextBoxButton() {
        await this.textBoxButton.click();
    }
    async enteringDataInTextBox(textBoxInfo: { fullName: string, currentAddress: string, permanentAddress: string }) {
        await this.fullname.setValue(textBoxInfo.fullName);
        await this.currentAdd.setValue(textBoxInfo.currentAddress);
        await this.permanentAdd.setValue(textBoxInfo.permanentAddress);
    }
    async randomEmail(email: string) {
        await this.emailAddress.setValue(email)
    }
    async clickOnSubmitButton() {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }
}
export default new TextBoxPage()