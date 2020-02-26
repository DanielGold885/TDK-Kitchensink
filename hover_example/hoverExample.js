'use strict';

const { go, it, hover, waitForText } = require('testim');

// W3school locators
const HOVER_ME_BUTTON = '#main > div.dropdown.dropdown2 > button';
const HOVER_MENU_ITEM = '#main > div.dropdown.dropdown2 > div > a:nth-child(1)';

//npm-react locators
const PRODUCTS_MENU = '#nav-products-link > span';
const DROPDOWN_MENU_OPTION_1 = '#nav-pro-link'; 

describe('Using hover examples', () => {

    it('Hover Example_01', async () => {
        await go('https://www.w3schools.com/howto/howto_css_dropdown.asp');
        await hover(HOVER_ME_BUTTON);
        await waitForText(HOVER_MENU_ITEM, 'Link 1')
    });
    
    it('Hover Example_02', async () => {
        await go('https://www.npmjs.com/package/react-hover-menu');
        await hover(PRODUCTS_MENU);
        await waitForText(DROPDOWN_MENU_OPTION_1, 'Pro')
    });
});


