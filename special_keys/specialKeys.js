'use strict';

const { go, test, waitForElement, sendCharacter, type } = require('testim');


test("Send characters", async () => {
    await go('http://demo.testim.io/login');
    await type('#login > div:nth-child(1) > input', 'username');
    await sendCharacter('button', 9);
    //hit tab
    await type('input[type="password"]', 'mySuperCoolPassword');
    await sendCharacter('button', 13);
    //hit Enter / return
    await waitForElement('h1[class="Hero__headline-1___3C6vA"]');
});