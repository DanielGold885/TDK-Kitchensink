'use strict';

const { url, click, selectOption, type, waitForText } = require('testim');
const {expect} = require('chai');

const SEARCH_RESULT_PAGE_HEADLINE = "#firstHeading";


async function validateFirstHeadline(value) {
    await waitForText(SEARCH_RESULT_PAGE_HEADLINE, value);
}


module.exports = {
    validateHeadline,
}
