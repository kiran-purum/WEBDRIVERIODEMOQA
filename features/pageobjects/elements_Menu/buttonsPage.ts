class ButtonsPage {
    get buttonMenuButton() { return $('//span[text()="Buttons"]') }
    get buttonsHeader() { return $('//div[text()="Buttons"]') }
    get doubleClick() { return $('#doubleClickBtn') }
    get doubleClickText() { return $('#doubleClickMessage') }
    get rightClick() { return $('#rightClickBtn') }
    get rightClickMessage() { return $('#rightClickMessage') }
    get clickMe() { return $('//button[text()="Click Me"]') }
    get clickMeMessage() { return $('#dynamicClickMessage') }
    async clickOnButtonsMenuButton() {
        await this.buttonMenuButton.click();
    }
    async clickOnDoubleClickButton() {
        await this.doubleClick.doubleClick();
    }
    async clickOnRightClickButton() {
        await this.rightClick.click({ button: 'right' })
    }
    async clickOnClickMeButton() {
        await this.clickMe.click();
    }
}
export default new ButtonsPage()