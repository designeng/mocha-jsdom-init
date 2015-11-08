var jsdom = require('jsdom');
var assert = require('assert');

var one = require('../src/one');

describe('componentDir', function () {
    describe('#render', function () {
        it('should render text to dom', function (done) {
            var expected = 'Hi there and greetings!';
            jsdom.env({
                html: ' ',
                done: function (errors, window) {
                    var element = window.document.createElement('div');
                    var newContent = window.document.createTextNode("Hi there and greetings!");
                    element.appendChild(newContent);
                    assert.strictEqual(element.textContent, expected);
                    done();
                }
            });
        });
    });
});