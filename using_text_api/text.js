'use strict';

const { go, test, text, type, Locator } = require('testim');
const { expect } = require('chai');

const expectedPageHeader = 'This is an example webpage';

test('using text api 01', async () => {
    await go('http://jsbin.testim.io/mid/2');
    const pageHeaderText = await text('body > h1');
    expect(pageHeaderText).to.equal(expectedPageHeader);
});

test('using text api 02', async () => {
    await go('http://jsbin.testim.io/mid/3');
    const myExtractedText = await text('body > div');
    //You can extract a text from an element and use it later in the test

    await type('#input', myExtractedText);
});


test('using text api with nthChild selector', async () => {
    await go('http://jsbin.testim.io/mid/5');
    const firstListItem = await text(Locator.fromSelector('body > ul').nthChild(1));
    //This will return the first list item

    await type('#input', firstListItems);
});


