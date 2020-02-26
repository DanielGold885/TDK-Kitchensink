'use strict';

const { go, waitForElement, it, sleep, describe } = require('testim');


describe('TDK wait for element mechanism', () => {
    
    it("Wait for element 1", async () => {
        await go('http://demo.testim.io');
        await waitForElement('h1[class="Hero__headline-1___3C6vA"]');
       // wait for the element
    });

    it("Wait for element 2", async () => {
        await go('http://demo.testim.io');
        await waitForElement('h1[class="Hero__headline-1___3C6vA"]', {
            checkVisibility: false
            //wait for the element to be on the page but does not check for visibility
          });
    });

    it("Sleep", async () => {
        await go('http://demo.testim.io');
        await sleep(5000);
        console.log('5 seconds passed');
        // "Sleep" - stop the execution for (5000) miliseconds without waiting for any specific condition
    });

});   
