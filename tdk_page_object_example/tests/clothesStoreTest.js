'use strict';

const { go, it, describe } = require('testim');
const { searchForItem} = require("../PO/clothesStoreMainPage");
const { readFromParamFile } = require("../utilities/baseCommon");

//In this usage example we simply call the methods without instansiating the page


describe('Clothes store test suite', () => {
    beforeEach(async () => {
        await go(readFromParamFile("myStoreURL"));
    });

    it("Search for item from main page", async () => {
        await searchForItem(readFromParamFile("clothesItem"));
    });
});