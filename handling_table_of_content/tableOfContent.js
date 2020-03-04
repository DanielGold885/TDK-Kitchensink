'use strict';

const { expect } = require('chai');
const {go, test, cliAction, evaluate} = require('testim');


const listOfExpectedValues = ['Alfreds', 'Maria', 'Germany', 
    'Centro', 'Francisco', 'Mexico', 'Ernst Handel', 'Roland', 'Austria', 'Island Trading', 'Helen', 'UK',
        'L.B Winecellars', 'Yoshi', 'Canada', 'M.A Riuniti', 'Giovanni', 'Italy'];


test("Validate table contains all expected values ", async () => {
    await go('http://jsbin.testim.io/nez/6');

    const tableCellContent = await evaluate(() => Array.from(document.querySelectorAll('#table > tbody > tr > td')).map(e => e.innerText));
    const assertion = tableCellContent.every((v, i) => v === listOfExpectedValues[i]);
    expect(assertion).to.eql(true);
});


test("Validate table contains at least some of the expected values ", async () => {
    await go('http://jsbin.testim.io/nez/6');

    const tableCellContent = await evaluate(() => Array.from(document.querySelectorAll('#table > tbody > tr > td')).map(e => e.innerText));
    const assertion = tableCellContent.some((v, i) => v === listOfExpectedValues[i]);
    expect(assertion).to.eql(true);
});

//You can also use "chai" asserions to compare expected values with table content
test("Validate table contains all expected values 02 ", async () => {
    await go('http://jsbin.testim.io/nez/6');

    const tableCellContent = await evaluate(() => Array.from(document.querySelectorAll('#table > tbody > tr > td')).map(e => e.innerText));
    expect(tableCellContent).to.have.members(listOfExpectedValues);
});

//You can also do that with a for loop
test("Validate table contains all expected values 03", async () => {
    await go('http://jsbin.testim.io/nez/6');

    const tableCellContent = await evaluate(() => Array.from(document.querySelectorAll('#table > tbody > tr > td')).map(e => e.innerText));

    for (let i = 0; i < tableCellContent.length; i++) {

        expect(tableCellContent[i]).to.eql(listOfExpectedValues[i]);
    }
});

