class LinksPage {
    get linksButton() { return $('//span[text()="Links"]') }
    get linksHeader() { return $('//div[text()="Links"]') }
    get homedButton() { return $('#dynamicLink') }
    get createdButton() { return $('#created') }
    get responseMessage() { return $('//*[@id="linkResponse"]') }
    async clickOnLinksButton() {
        await this.linksButton.waitForClickable();
        await this.linksButton.click();
    }
    async clickOnHomeButton() {
        await this.homedButton.click();
    }
    async clickOnCreatedButton() {
        await this.createdButton.click();
    }
}
export default new LinksPage()