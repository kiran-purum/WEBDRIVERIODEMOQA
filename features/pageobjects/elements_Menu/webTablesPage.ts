class WebTablesPage {
    get webTableButton() { return $('//span[text()="Web Tables"]') }
    get webTablesHeader() { return $('//div[text()="Web Tables"]') }
    get addRecordButton() { return $('#addNewRecordButton') }
    get registrationFormHeader() { return $('#registration-form-modal') }
    get firstName() { return $('#firstName') }
    get lastName() { return $('#lastName') }
    get email() { return $('#userEmail') }
    get age() { return $('#age') }
    get salary() { return $('#salary') }
    get department() { return $('#department') }
    get submitButton() { return $('#submit') }
    get editRecord() { return $('#edit-record-3') }
    get editSalary() { return $('#salary') }
    get submitButonAfterEdit() { return $('#submit') }
    get deleteOption() { return $('#delete-record-3') }
    async clickOnWebTablesButton() {
        await this.webTableButton.click();
    }
    async clickOnAddRecordButton() {
        await this.addRecordButton.click();
    }
    async enteringFormDetails(formInfo: { f_Name: string, l_Name: string, e_Age: number, e_Salary: number, e_Department: string }) {
        await this.firstName.setValue(formInfo.f_Name);
        await this.lastName.setValue(formInfo.l_Name);
        await this.age.setValue(formInfo.e_Age);
        await this.salary.setValue(formInfo.e_Salary);
        await this.department.setValue(formInfo.e_Department);
    }
    async enteringEmail(email: string) {
        await this.email.setValue(email);
    }
    async clickOnSubmitButton() {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }
    async clickOnEditRecordOption() {
        await this.editRecord.waitForClickable();
        await this.editRecord.click();
    }
    async editSalaryDetails(setSalary: number) {
        await this.editSalary.clearValue();
        await this.editSalary.setValue(setSalary);
    }
    async clickOnSubmitButtonAfterEdit() {
        await this.submitButonAfterEdit.waitForClickable();
        await this.submitButonAfterEdit.click();
    }
    async clickOnDeleteRecordOption() {
        await this.deleteOption.waitForClickable();
        await this.deleteOption.click();
    }
}
export default new WebTablesPage()