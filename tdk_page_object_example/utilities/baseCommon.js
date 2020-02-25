'use strict';

const paramFile = require("./parameterFile");


function readFromParamFile(value){
    return paramFile[value]
}

module.exports.readFromParamFile = readFromParamFile;

