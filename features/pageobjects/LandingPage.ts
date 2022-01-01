class HomePage {
    get elementsHeader() { return $('.main-header') }
    async clickOnLandingPageLink() {
        await browser.url('https://demoqa.com/elements');
        await browser.maximizeWindow();
    }
}
export default new HomePage()