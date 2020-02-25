
'use strict';

const { url, click, selectOption, type, waitForText, hover, evaluate, waitForElement } = require('testim');
const { expect } = require('chai');

const FLOWER_BUCKET_PAGE_HEADLINE = "#P7 > div:nth-child(2) > div > span > h1";
const PRODUCT = "div[class='product']";
const LOVE_EVENT = "#P80 > div.clearfix > div:nth-child(1) > ul > li:nth-child(7) > a";
const ADD_TO_CART_BUTTON = "#imgAddCart_dis > img";
const CONTINUE_ADDING_TO_CART_BUTTON = "#SetSessionButton";


async function checkCorrectPageHeader() {
    await waitForText(FLOWER_BUCKET_PAGE_HEADLINE, /זרי פרחים/);
}

async function validateProductCountOnPage(numberOfProductsOnPage) {
    //validate the page has x amount of products
    const numberOfProducts = await evaluate((PRODUCT) => document.querySelectorAll(PRODUCT).length, PRODUCT);
    expect(numberOfProducts).to.equal(numberOfProductsOnPage);
}

async function selectLoveEvent() {
    await click(LOVE_EVENT)
}

async function addToCart() {
    await click(ADD_TO_CART_BUTTON);
}

async function clickContinueAddToCart() {
    await click(CONTINUE_ADDING_TO_CART_BUTTON);
}


module.exports = {
    checkCorrectPageHeader,
    validateProductCountOnPage,
    selectLoveEvent,
    addToCart,
    clickContinueAddToCart
}