'use strict';

const expect = require('chai').expect;
const { go, dragAndDrop, test, evaluate } = require('testim');


test("Drag & drop example", async () => {
    await go('http://jsbin.testim.io/put/4');
    await dragAndDrop('#drag1', '#div1');

    const innerHtml = await evaluate(() => {
        return document.querySelector('#div1').innerHTML;
    });
    
    expect(innerHtml).to.contain('img');
    expect(innerHtml).to.contain('id="drag1"');
    expect(innerHtml).to.contain('src="https://clipartart.com/images/drag-and-drop-clipart.jpg"');
});