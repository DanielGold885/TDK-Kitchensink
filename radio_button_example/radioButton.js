'use strict';

const expect = require('chai').expect;
const { go, test, click, radio } = require('testim');

test("radio button", async () => {
    await go('http://jsbin.testim.io/hin/3');

    await click('input[value="summer"]')
    //Click on the third radio button

    let thirdButton = await radio('input[value="summer"]');
    expect(thirdButton).to.equal(true);
    //validate that the radio button is checked

    let secondButton = await radio('input[value="winter"]');
    expect(secondButton).to.equal(false);
    //validate that the first radio button is not checked
});