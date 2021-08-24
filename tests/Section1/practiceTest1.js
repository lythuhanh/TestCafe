import { Selector, t } from "testcafe";

const BUTTON_SUB = Selector('input[class="btn btn-success"]')
const ALERT_MSG = Selector('div[class="alert alert-success alert-dismissible"]')

const TXT_NAME =Selector('input[name="name"][minlength ="2"]')
const TXT_EMAIL= Selector('input[name="email"]')
const TXT_PASS = Selector('input#exampleInputPassword1')

const CHECKBOX_CHECKME = Selector('#exampleCheck1')

const DROP_GENDER = Selector('#exampleFormControlSelect1')
const DROP_GENDER_OPTION = DROP_GENDER.find('option');

const RADIO_STATUS = Selector('#inlineRadio2')

fixture `Interact Page 1 `

.meta({ author: 'HanhLT', creationDate: '12/08/2021' })
.page `https://rahulshettyacademy.com/angularpractice/`

.beforeEach( async t => {
    await t
        .maximizeWindow()
});

test('Click on button', async t => {
    await t
        // Click on Submit button
        .click(BUTTON_SUB)
        // Veriryf message displayed
        .expect(ALERT_MSG.innerText).contains(' The Form has been submitted successfully!.')

});

test('Type text into element', async t => {
    await t
        // input value in Name field
        .click(TXT_NAME).pressKey('ctrl+a delete')
        .typeText(TXT_NAME, 'Hanhlt84')
        .expect(TXT_NAME.value).eql('Hanhlt84')
        // input value in Email field
        .click(TXT_EMAIL).pressKey('ctrl+a delete')
        .typeText(TXT_EMAIL, 'abc@gmail.com')
        .expect(TXT_EMAIL.value).eql('abc@gmail.com')
        // input value in Password field
        .click(TXT_PASS).pressKey('ctrl+a delete')
        .typeText(TXT_PASS, '123456')
        .expect(TXT_PASS.value).eql('123456')
        .wait(5000)
    
}); 


test('Tick on checkbox', async t => {
    await t
        // Tick on check box
        .click(CHECKBOX_CHECKME)
        // Verify checkbox is ticked
        .expect(CHECKBOX_CHECKME.nth(0).checked)
        .eql(true)
}); 

test('Select value from dropdown list', async t => {
    await t
        .click(DROP_GENDER)
        .click(DROP_GENDER_OPTION.withText('Female'))
        .expect(DROP_GENDER.value).eql('Female')
        .wait(5000)
        
}); 

test('Select status', async t => {
    await t
        // Click on Radio button
        .click(RADIO_STATUS)
        // Verify button is selected
        .expect(RADIO_STATUS.nth(0).checked)
        .eql(true)
        
});

