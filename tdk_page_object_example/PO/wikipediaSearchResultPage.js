'use strict';

const { waitForText } = require('testim');

const SEARCH_RESULT_PAGE_HEADLINE = '#firstHeading';


async function validateFirstHeadline(value) {
    await waitForText(SEARCH_RESULT_PAGE_HEADLINE, value);
}


module.exports = {
    validateFirstHeadline,
}
