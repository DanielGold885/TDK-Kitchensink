'use strict';

const { go, waitForNoElement, it, sleep, describe, click } = require('testim');


describe('TDK waitFornoElement mechanism', () => {
    
    it("waitForElement 1", async () => {
        await go('http://demo.testim.io');
        click('button[class="NavButton__nav-button___34wHC"]')
        await waitForNoElement('h1[class="Hero__headline-1___3C6vA"]');
       // wait for the element not be present in the AUT
    });
});   
