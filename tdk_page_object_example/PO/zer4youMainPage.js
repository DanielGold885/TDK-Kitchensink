
'use strict';

const { url, click, selectOption, type, waitForText, hover, evaluate, waitForElement} = require('testim');
const { expect } = require('chai');
const businessForm = require('./zer4youBusinessPage')
const flowerBucketPage = require('./zer4youFlowerBucketPage')

const FLOWERS_MENU = "#ctl01_RadMenu1 > ul > li.rmItem.rmFirst > a > span";
const FLOWER_BUCKET = "#ctl01_RadMenu1 > ul > li.rmItem.rmFirst > div > ul > li.rmItem.rmFirst > a > span";
const FURTHER_DETAILS_BUTTON = "#P8 > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > a";

const BUSINESS_DEPARTMENT = "#P50 > div.footer_site_width.clearfix > div:nth-child(5) > div.bg_dot > a > b";
const COMPANY_NAME_MANDATORY_ERROR = "#P8 > div > div:nth-child(1) > div > div.formErrorContent";
const CONTACT_NAME_MANDATORY_ERROR = "#P8 > div > div:nth-child(2) > div > div.formErrorContent";
const PHONE_NUMBER_MANDATORY_ERROR = "#P8 > div > div:nth-child(4) > div > div.formErrorContent";

async function goToFlowerBucketPage() {
    //hover the upper flowers menu to present the sub menu
    await hover(FLOWERS_MENU);
    await click(FLOWER_BUCKET);
    await flowerBucketPage.checkCorrectPageHeader();
}

async function openDetailsPage() {
    await click(FURTHER_DETAILS_BUTTON);
}

async function goToBusinessDepartmentForm() {
    await click(BUSINESS_DEPARTMENT);
    await businessForm.validatePageHeader();
}

async function validateMandatoryFieldsOnBusinessForm() {
    await waitForElement(COMPANY_NAME_MANDATORY_ERROR);
    await waitForElement(CONTACT_NAME_MANDATORY_ERROR);
    await waitForElement(PHONE_NUMBER_MANDATORY_ERROR);
}


module.exports = {
    goToFlowerBucketPage,
    openDetailsPage,
    goToBusinessDepartmentForm,
    validateMandatoryFieldsOnBusinessForm,
}

