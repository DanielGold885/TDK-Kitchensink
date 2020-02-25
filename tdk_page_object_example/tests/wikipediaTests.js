'use strict';

const { go, test } = require('testim');

const expect = require('chai').expect;
//const { searchTextInWikipedia, setEnglishLanguage, readWikipediaInEnglishLanguage } = require("../PO/wikipediaHomePage");
const wikipediaMainPage = require("../PO/wikipediaHomePage");
const { readFromParamFile } = require("../utilities/baseCommon");

test("Search a text in Wikipedia", async () => {
    await go(readFromParamFile("wikipediaURL"));
    await wikipediaMainPage.setEnglishLanguage(wikipediaMainPage.readFromParamFile("Language"));
    await wikipediaMainPage.searchTextInWikipedia(readFromParamFile("searchText"));
});

test("Validate read Wikipedia in your language navigates to the correct page", async () => {
    await go(readFromParamFile("URL"));
    await wikipediaMainPage.readWikipediaInEnglishLanguage(readFromParamFile("Language"));
});
