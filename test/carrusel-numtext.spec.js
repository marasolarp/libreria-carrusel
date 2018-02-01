
const chai = require('chai');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!doctype html><html><body><section id="container-carousel"><div class="carousel"><img src="https://k39.kn3.net/taringa/4/6/6/8/6/2/1/drobinoga/1EA.jpg?9932" /><div class="text"><p>"La elegancia quiso cuerpo y vida, por eso se transformó en gato.” – Guillermo de Aquitania</p></div></div></section></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

var $ = require('jquery');
var expect = require('chai').expect;
const carruselNumTextDom = require('../assets/js/carusel-numtext');

describe("Comprobar extension", () => {

	it("Comprobar jpg, png", () => {
		expect(carruselNumTextDom.extension(), true);
	})
});

describe("Comprobar clases y id", () => {

  it("Existe id", () => {
    chai.assert.exist($('#container-carousel'));
  })

  it("Existen las clases", () => {
    chai.assert.exist($('.carousel'));
    chai.assert.exist($('.text'));
  })
})