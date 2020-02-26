'use strict';

const {go, it, click, before, after, beforeEach, afterEach, waitForText} = require('testim');

describe('the test suite', () => {    

    before(() => {
        console.log('Execution started')
    });

    beforeEach(async () => {
        await go('http://jsbin.testim.io/nex/1');
        console.log('Test Started');
    });

    it('test_01', async () => {
       await click('#btn');
       await waitForText('#counter', '1');
    });

    afterEach(() => {
        console.log('Test Finished');
    });

    after(() => {
        console.log('Execution started');
    });

});
