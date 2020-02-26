'use strict';

const {go, test, click, before, after, beforeEach, afterEach} = require('testim');


before('Run BEFORE the entire test file', async () => {
    console.log('Execution started')
});

beforeEach('Run before each test', async () => {
    console.log('Test Started');
});

test('test_01', async () => {
    await go('http://jsbin.testim.io/nex/1');
    await click('#clickOnMe');
    await waitForText('#counter', '1');
});

afterEach('Run after each test', async () => {
    console.log('Test Finished');
});

after('Run AFTER the entire test file', async () => {
    console.log('Execution started');
});
