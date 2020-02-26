'use strict';

const { go, test, withContext } = require('testim');
const { expect } = require('chai');


test('Handling multi-tabs', async () => {
    await go('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target');
    const {click: clickInFirstTab} = withContext({
        frameSelector: '#iframeResult',
        tabIndex: 0
        //tabIndex will point to the desired tab. in this case, the main tab (0).
    });
    await clickInFirstTab('body > a');

    const {click: clickInSecondTab} = withContext({
        tabUrl: 'https://www.w3schools.com/',
        //You can also specify the tab URL explicitly
        tabIndex: 1
        //In this case we are pointing to the second open tab (Index: 1)
    });

    await clickInSecondTab('#main > div.w3-row.w3-margin-bottom > div:nth-child(2) > div > a');

    const { url: urlFromThirdTab } = withContext({
        tabIndex: 2,
        tabUrl: 'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default'
    });

    const URL = await urlFromThirdTab();
    expect(URL).to.equal('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default');
});

