"use strict"
//console.log('hola');

//var expresion1 = new RegExp('[0123456789]');

var expresion1 = new RegExp('[0-9a-z]');

var expresion2 = /abc/;

//console.log(expresion1.test('abced'));

//var fecha = /\d\d-\d\d-\d\d\d\d/

//si cumple al menos un valor []
//var exp = /[\d]/

//negar un patron
//var exp2 = /[^01]/
//console.log(exp2.test('101002'))

// sigbolo + , significa patron se va repetir 1 o mas
// * significa 1 o mas veces o que no este presente
//


//var exp = /\d+/;
//var exp = /\d*/;

//patron opcional
var exp = /Hola mun?do/;

console.log(exp.test('Hola mudo'));
