var Fraction = require('fraction.js');

var x = new Fraction(1.88);
var res = x.toFraction(true)

var f = new Fraction("9.4'31'");
f.mul([-4, 3]).mod("4.'8'");
console.log(f.toFraction());

const { ToWords } = require('to-words');
const toWords = new ToWords();

let words = toWords.convert(123);
console.log(words)