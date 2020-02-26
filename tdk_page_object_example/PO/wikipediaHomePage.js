
'use strict';

const { url, click, selectOption, type, waitForText, waitForElement } = require('testim');
const { expect } = require('chai');
const searchResultPage = require('./wikipediaSearchResultPage')


const SEARCH_TEXT_FIELD = '#searchInput';
const SEARCH_ICON = '#search-form > fieldset > button > i';
const ENGLISH_LANGUAGE_SELECTOR = '#searchLanguage > option[value="en"]';
const LANGUAGE = '#jsLangLabel';
const READ_WIKIPEDIA_IN_YOUR_LANGUAGE_SELECTOR = '#js-lang-list-button > i.sprite.svg-arrow-down-blue';
const ENGLISH_LINK = '#js-lang-lists > div:nth-child(2) > ul > li:nth-child(3) > a';
const WELCOME_HEADER = '#mp-topbanner > div > div:nth-child(1)';


async function searchTextInWikipedia(searchValue) {
    //search value in wikipedia from the homepage

    await type(SEARCH_TEXT_FIELD, searchValue);
    await click(SEARCH_ICON);
    await searchResultPage.validateFirstHeadline(searchValue);
}

async function setLanguage(LanguageSelectBoxValue) {
    //select a language by passing a value

    switch (LanguageSelectBoxValue) {
        case 'English':
            //More language options can be added
            await selectOption(ENGLISH_LANGUAGE_SELECTOR);
            await waitForText(LANGUAGE, /en/);
            break;
    }
}

async function readWikipediaInEnglishLanguage(readWikipediaLanguage) {
    // open read wikipedia in your language

    await click(READ_WIKIPEDIA_IN_YOUR_LANGUAGE_SELECTOR);
    await waitForText('.bookshelf', /1 000 000[+]/);
    switch (readWikipediaLanguage) {
        case 'English':
            await click(ENGLISH_LINK);
            await waitForElement(WELCOME_HEADER);
            break;
    }
}


module.exports = {
    searchTextInWikipedia,
    setLanguage,
    readWikipediaInEnglishLanguage
}