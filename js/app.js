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

//validar una fecha
//{2,} minimo 2 maximo n
//var exp = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
//sin importar las mayusculas
//var exp = /Hola mundo/i
//agrupado de ext o sub expresiones
//var exp = /Woo+(hoo+)+/i


//Woohoo!

//limites de del valor
//var exp = /\bcat\b/

//opciones con el |
var exp = /pollo|res|pescado/



console.log(exp.test('el cliente pollo '));
//console.log(exp);
//console.log('hasta 1994'.match(/\d+/));
