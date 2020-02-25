'use strict';

const { url, click, selectOption, type, waitForText, hover, evaluate, waitForElement} = require('testim');
const { expect } = require('chai');

const SEARCH_FIELD = "input[name='search_query']";
const SEARCH_BUTTON = "button[name='submit_search']";
const PRODUCT_TITLE = "#center_column > ul > li > div > div.right-block > h5 > a"


async function searchForItem(item) {
    await type(SEARCH_FIELD, item);
    await click(SEARCH_BUTTON);
    await waitForText(PRODUCT_TITLE, item);
}

module.exports = {
    searchForItem
}