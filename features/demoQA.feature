Feature: Testing the DemoQA Practice Page

    Scenario: Validating the Landing page of DemoQA Practice Page
        Given Link to the Landiong Page Of DemoQA Practice page
        Then I should Validate the Header as "Elements"

    Scenario: Validating the Text Box in DemoQA Practice Page
        When I click on the TextBox Button
        Then I should see the header as "Text Box"
        When I fill the data text boxes and click submit button

    Scenario: Validating the Check Box in DemoQA Practice Page
        When I click the CheckBox Button
        Then I validate the Header text as "Check Box"
        When I click the check Button

    Scenario: Validating the Radio Button in DemoQA Practice Page
        When I click the Radio Button
        Then I can see the Text as "Radio Button"
        When I can select the option Yes or Impressive
        Then I see the seleted option message "Yes"

    Scenario: Validating the Web Tables in DemoQA Practice Page
        When I click on the web tables menu button
        Then I can validate the header text as "Web Tables"
        When I click on Add Button and add the details
        Then I validate the popup header as "Registration Form"
        When I perform the actions edit and delete on records

    Scenario: Validating the Buttons in DemoQA Practice Page
        When I click on the Buttons tab
        Then I can Validate the header Text as "Buttons"
        When I perform the double click on the button
        Then I can see the message as "You have done a double click"
        When I right click the button
        Then I can see message as "You have done a right click"
        When I click the Click Me Button
        Then I can see the Text message as "You have done a dynamic click"

    Scenario: Validating the Links in DemoQA Practice Page
        When I click Links menu Button
        Then I can See the text as "Links"
        # When I click on Home Link should navigate to another window
        When I click on created Link to check the Api call
        Then I can Validate Api Call Message as "Link has responded with staus 201 and status text Created"