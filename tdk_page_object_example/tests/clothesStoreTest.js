'use strict';

const { go, test } = require('testim');
const expect = require('chai').expect;
const { searchForItem} = require("../PO/clothesStoreMainPage");
const { readFromParamFile } = require("../utilities/baseCommon");


test("Search for item from main page", async () => {
    await go(readFromParamFile("myStoreURL"));
    await searchForItem(readFromParamFile("clothesItem"));
});