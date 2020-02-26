'use strict';

const { go, it, describe, beforeEach } = require('testim');

const wikipediaMainPage = require('../PO/wikipediaHomePage');
const { readFromParamFile } = require('../utilities/baseCommon');


describe('Wikipedia test suite', () => {
    beforeEach(async () => {
    await go(readFromParamFile("wikipediaURL"));
    });

    it('Search a text in Wikipedia', async () => {
        await wikipediaMainPage.setLanguage(readFromParamFile('Language'));
        await wikipediaMainPage.searchTextInWikipedia(readFromParamFile("searchText"));
    });

    it('Validate read Wikipedia in your language navigates to the correct page', async () => {
        await wikipediaMainPage.readWikipediaInEnglishLanguage(readFromParamFile('Language'));
    });

});
