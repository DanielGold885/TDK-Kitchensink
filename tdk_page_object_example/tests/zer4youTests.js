'use strict';

const { go, test } = require('testim');
const expect = require('chai').expect;

const { readFromParamFile } = require("../utilities/baseCommon");

const zer4YoumainPage = require('../PO/zer4youMainPage');
const flowerBucketPage = require('../PO/zer4youFlowerBucketPage');
const businessPage = require('../PO/zer4youBusinessPage')


test("Validate the number of products in love section in flowers menu", async () => {
    await go(readFromParamFile("zer4youURL"));
    await zer4YoumainPage.goToFlowerBucketPage();
    await flowerBucketPage.selectLoveEvent();
    await flowerBucketPage.selectLoveEvent();
    await flowerBucketPage.validateProductCountOnPage(readFromParamFile("numberOfProductsOnPage"));
});

test("Validate mandatory fields in business contact form", async () => {
    await go(readFromParamFile("zer4youURL"));
    await zer4YoumainPage.goToBusinessDepartmentForm();
    await businessPage.clickOnSendForm();
    await businessPage.validateMandatoryFieldsOnBusinessForm();
});