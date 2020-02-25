'use strict';

const { go, test, hover, waitForText } = require('testim');
const { expect } = require('chai');

const HOVER_ME_BUTTON = '#main > div.dropdown.dropdown2 > button';
const TEXT_SHOWN_ON_HOVER = 'Link 1';
const HOVER_MENU_ITEM = '#main > div.dropdown.dropdown2 > div > a:nth-child(1)';


test('Hover Example', async () => {
    await go('https://www.w3schools.com/howto/howto_css_dropdown.asp');
    await hover(HOVER_ME_BUTTON);
    await waitForText(HOVER_MENU_ITEM, TEXT_SHOWN_ON_HOVER)
});