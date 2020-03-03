'use strict';

const expect = require('chai').expect;
const {
    go, type, test,
} = require('testim');


/* 

Prior to executing the test file, please set the following env variables:

$ export BASE_URL='http://jsbin.testim.io/xaz/1' 
$ export TDK_INPUT_TEXT='myUserName'

*/ 



test('Using env variables in your tests', async () => {
    await go(process.env.BASE_URL);
    //The URL will be set by what is contained in env variable BASE_URL

    type('#textField', process.env.TDK_INPUT_TEXT);
    //Set a text from an env variable named TDK_TEXT_TO_ASSIGN
});