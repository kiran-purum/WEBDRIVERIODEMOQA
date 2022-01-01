import { Given, Then, When } from "@wdio/cucumber-framework";
import textBoxPage from "../pageobjects/elements_Menu/textBoxPage";
import LandingPage from "../pageobjects/LandingPage";
import randomData from "../testData/demoQA.json";
import demoqa from "faker";
import checkBoxPage from "../pageobjects/elements_Menu/checkBoxPage";
import radioButtonPage from "../pageobjects/elements_Menu/radioButtonPage";
import webTablesPage from "../pageobjects/elements_Menu/webTablesPage";
import buttonsPage from "../pageobjects/elements_Menu/buttonsPage";
import linksPage from "../pageobjects/elements_Menu/linksPage";

Given(/^Link to the Landiong Page Of DemoQA Practice page$/, async () => {
    await LandingPage.clickOnLandingPageLink();
});
Then(/^I should Validate the Header as \"([^\"]*)\"$/, async (elements) => {
    await expect(LandingPage.elementsHeader).toHaveText(elements);
});
When(/^I click on the TextBox Button$/, async () => {
    await textBoxPage.clickOnTextBoxButton();
});
Then(/^I should see the header as \"([^\"]*)\"$/, async (textbox) => {
    await expect(textBoxPage.textBoxHeader).toHaveText(textbox);
});
When(/^I fill the data text boxes and click submit button$/, async () => {
    await textBoxPage.enteringDataInTextBox(randomData.textBoxInfo);
    await textBoxPage.randomEmail(demoqa.internet.email());
    await textBoxPage.clickOnSubmitButton();
});
When(/^I click the CheckBox Button$/, async () => {
    await checkBoxPage.clickOnCheckBoxButton();
});
Then(/^I validate the Header text as \"([^\"]*)\"$/, async (checkbox) => {
    await expect(checkBoxPage.checkBoxHeader).toHaveText(checkbox)
});
When(/^I click the check Button$/, async () => {
    await checkBoxPage.clickOnCheckBox();
});
When(/^I click the Radio Button$/, async () => {
    await radioButtonPage.clickOnRadioButton();
});
Then(/^I can see the Text as \"([^\"]*)\"$/, async (radiobutton) => {
    await expect(radioButtonPage.radioButtonHeader).toHaveText(radiobutton);
});
When(/^I can select the option Yes or Impressive$/, async () => {
    await radioButtonPage.checkRadioButton();
});
Then(/^I see the seleted option message \"([^\"]*)\"$/, async (yes) => {
    await expect(radioButtonPage.selectedText).toHaveText(yes);
});
When(/^I click on the web tables menu button$/, async () => {
    await webTablesPage.clickOnWebTablesButton();
});
Then(/^I can validate the header text as \"([^\"]*)\"$/, async (webtables) => {
    await expect(webTablesPage.webTablesHeader).toHaveText(webtables);
});
When(/^I click on Add Button and add the details$/, async () => {
    await webTablesPage.clickOnAddRecordButton();
    await webTablesPage.enteringFormDetails(randomData.formInfo);
    await webTablesPage.enteringEmail(demoqa.internet.email());
    await webTablesPage.clickOnSubmitButton();
});
Then(/^I validate the popup header as \"([^\"]*)\"$/, async (registrationform) => {
    await expect(webTablesPage.registrationFormHeader).toHaveText(registrationform);
});
When(/^I perform the actions edit and delete on records$/, async () => {
    await webTablesPage.clickOnEditRecordOption();
    await webTablesPage.editSalaryDetails(randomData.setSalary);
    await webTablesPage.clickOnSubmitButtonAfterEdit();
    await webTablesPage.clickOnDeleteRecordOption();
});
When(/^I click on the Buttons tab$/, async () => {
    await buttonsPage.clickOnButtonsMenuButton();
});
Then(/^I can Validate the header Text as \"([^\"]*)\"$/, async (buttons) => {
    await expect(buttonsPage.buttonsHeader).toHaveText(buttons);
});
When(/^I perform the double click on the button$/, async () => {
    await buttonsPage.clickOnDoubleClickButton();
});
Then(/^I can see the message as \"([^\"]*)\"$/, async (doubleclick) => {
    await expect(buttonsPage.doubleClickText).toHaveText(doubleclick);
});
When(/^I right click the button$/, async () => {
    await buttonsPage.clickOnRightClickButton();
});
Then(/^I can see message as \"([^\"]*)\"$/, async (rightclick) => {
    await expect(buttonsPage.rightClickMessage).toHaveText(rightclick);
});
When(/^I click the Click Me Button$/, async () => {
    await buttonsPage.clickOnClickMeButton();
});
Then(/^I can see the Text message as \"([^\"]*)\"$/, async (dynamicclick) => {
    await expect(buttonsPage.clickMeMessage).toHaveText(dynamicclick);
});
When(/^I click Links menu Button$/, async () => {
    await linksPage.clickOnLinksButton();
});
Then(/^I can See the text as \"([^\"]*)\"$/, async (links) => {
    await expect(linksPage.linksHeader).toHaveText(links);
});
When(/^I click on Home Link should navigate to another window$/, async () => {
    await linksPage.clickOnHomeButton();
    const id = await browser.getWindowHandles();
    await browser.switchToWindow(id[1]);
    await browser.closeWindow();
    await browser.switchToWindow(id[0]);
});
When(/^I click on created Link to check the Api call$/, async () => {
    await linksPage.clickOnCreatedButton();
});
Then(/^I can Validate Api Call Message as \"([^\"]*)\"$/, async (statustextcreated) => {
    await expect(linksPage.responseMessage).toHaveText(statustextcreated);
});