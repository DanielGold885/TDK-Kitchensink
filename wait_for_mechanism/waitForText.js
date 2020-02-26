'use strict';

const { go, waitForText, it, describe } = require('testim');


describe('TDK wait for text mechanism', () => {
    
    it("Wait for text 1", async () => {
        await go('http://demo.testim.io');
        await waitForText('h1[class="Hero__headline-1___3C6vA"]', 'Space & Beyond');
       // wait for the element to contain the word 'Space & Beyond'
    });

    it("Wait for text 2", async () => {
        await go('http://demo.testim.io');
        await waitForText('h1[class="Hero__headline-1___3C6vA"]', /&/);
        //wait for the element text to contain a `&` (using regax)
    });

    it("Wait for text 3", async () => {
        await go('http://demo.testim.io');
        await waitForText('h1[class="Hero__headline-1___3C6vA"]', /&/, {
            checkVisibility: false
          });
        // wait for an element to contain a '&' but disregard it being visible
    });

});   
