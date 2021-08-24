import { Selector } from 'testcafe'

fixture `Interact Page 2 `

    .meta({ author: 'HanhLT', creationDate: '12/08/2021' })
    .page `https://rahulshettyacademy.com/AutomationPractice/`

    
    const CHECKBOX_EXP = Selector('#checkBoxOption1')
    const OPEN_WINDOW = Selector('#openwindow')
    const TXT_EMAIL1 = Selector('input[name="email"]')

    const BUTTON_OPEN_TAB = Selector('#opentab')
    const BUTTON_ALERT = Selector('#confirmbtn')

    const BUTTON_HIDDEN = Selector('#hide-textbox')
    const ELEMENT_HID = Selector('#displayed-text')

    const MOUSE_HOVER = Selector('#mousehover')
    const HOWVER_ITEM = Selector('a').withText('Top')

    test('Select Radio box', async t => {
        const RADIO_EXP = Selector('input[value="radio2"]')

        await t
            .click(RADIO_EXP)
            .expect(RADIO_EXP.nth(0).checked)
            .eql(true)

    });

    test('Select value with suggesstion', async t =>{
        const SUGGEST_EXP = Selector('#autocomplete')
        const DROPDOWN_SUGGESS = Selector('div').withText('Macau')

        await t 
            .typeText(SUGGEST_EXP, 'au')
            .click(DROPDOWN_SUGGESS)
            .expect(SUGGEST_EXP.value).eql('Macau')
    })

    test('Select value from drowdown list', async t => {
        const DROPDOWN_EXP = Selector('#dropdown-class-example')
        const DROPDOWN_EXP_OPTION = DROPDOWN_EXP.find('option')

        await t
            .click(DROPDOWN_EXP)
            .click(DROPDOWN_EXP_OPTION.withText('Option3'))
            .expect(DROPDOWN_EXP.innerText).contains('Option3')
            .wait(5000)

    });

    test('Select checkbox', async t => {
        await t
            .click(CHECKBOX_EXP)
            .expect(CHECKBOX_EXP.nth(0).checked)
            .eql(true)
        

    });

    test('Show Hide element', async t => {
        await t
            .maximizeWindow()
            .click(BUTTON_HIDDEN)
            .wait(5000)
            .expect(ELEMENT_HID.visible).notOk()
        
    });  

    test('Mouse hover', async t => {
        await t
            .hover(MOUSE_HOVER)
            .click(HOWVER_ITEM)
        // .expect(MOUSE_HOVER.value).eql('Top');
        
    });

    test('Action with new window', async t =>{
        const TEXT_INFO = Selector('span').withText('info@qaclickacademy.com')
        const TEXT_HEADER = Selector('h1').withText('Practice Page')
        await t
            .openWindow('http://www.qaclickacademy.com/')
            .expect(TEXT_INFO.visible).ok
            .switchToWindow('https://rahulshettyacademy.com/AutomationPractice/')
            .expect(TEXT_HEADER.visible).ok

    })

    test('Action with new tab', async t =>{
        const TEXT_HEADER = Selector('h1').withText('Practice Page')
        const BUTTON_INFO = Selector('a[class="theme-btn register-btn"]');
        const homepage = await t.getCurrentWindow();
        const documentation = await t.openWindow('https://www.rahulshettyacademy.com/#/index');
        await t
            .switchToWindow(homepage)
            .click(BUTTON_OPEN_TAB)
      
           // .switchToWindow(documentation)
            .wait(10000)
            .click(BUTTON_INFO)
           // .switchToPreviousWindow()
           // .expect(TEXT_HEADER.visible).ok

    })

    test.skip('Work with Alert message', async t =>{
        const TXT_ALERT_NAME = Selector('#name')
        const BUTTON_ALERT = Selector('#alertbtn')
        const history = getNativeDialogHistory()
        
        await t
           // .setNativeDialog(() => true)
            .typeText(TXT_ALERT_NAME, 'Test1')
            //.setNativeDialog(() => true)
            .click(BUTTON_ALERT)
            

        
        
            .expect(history.innerText).contains('Hello test 1');
    })

