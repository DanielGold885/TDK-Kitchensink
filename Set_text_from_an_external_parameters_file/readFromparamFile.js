'use strict';

const expect = require('chai').expect;
const {
    go, type, test, click,
} = require('testim');

const paramFile = require('./parameters');

function readFromParamFile(value){
    //This function reads from a parameters (json) file and returns a value
    return paramFile[value]
}


test('Search a value in wikipedia by reading from a parameter file', async () => {
    await go(readFromParamFile('URL'));
    //The URL will be set by what is contained in the parameters file.

    type('#searchInput', readFromParamFile('searchText'));
    //Set a text from a parameter file. In this case the seach value will be: "Software Testing".
});

