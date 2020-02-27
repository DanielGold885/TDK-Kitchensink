'use strict';

const {waitForText, go, test, refresh, click} = require('testim');


test("refresh", async () => {
    await go('http://jsbin.testim.io/cey/4');
    await waitForText('#d', '0');
    await click('#b');
    await waitForText('#d', '1');
    await refresh();
    await waitForText('#d', '0');
});
