
'use strict';

const { url, click, selectOption, type, waitForText, hover, evaluate, waitForElement } = require('testim');
const { expect } = require('chai');


const BUSINESS_DEPARTMENT_PAGE_HEADER = "#P7 > div:nth-child(2) > div > span > h1";
const COMPANY_NAME_MANDATORY_ERROR = "#P8 > div > div:nth-child(1) > div > div.formErrorContent";
const CONTACT_NAME_MANDATORY_ERROR = "#P8 > div > div:nth-child(2) > div > div.formErrorContent";
const PHONE_NUMBER_MANDATORY_ERROR = "#P8 > div > div:nth-child(4) > div > div.formErrorContent";
const SEND_FORM_BUTTON = "#sendbtn";


async function clickOnSendForm() {
    await click(SEND_FORM_BUTTON);
}

async function validateMandatoryFieldsOnBusinessForm() {
    await waitForElement(COMPANY_NAME_MANDATORY_ERROR);
    await waitForElement(CONTACT_NAME_MANDATORY_ERROR);
    await waitForElement(PHONE_NUMBER_MANDATORY_ERROR);
}

async function validatePageHeader() {
    await waitForText(BUSINESS_DEPARTMENT_PAGE_HEADER, /ZER4U BUSINESS/);
}


module.exports = {
    validateMandatoryFieldsOnBusinessForm,
    clickOnSendForm,
    validatePageHeader
}

