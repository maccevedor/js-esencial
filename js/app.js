"use strict"

//array

var platillos = ["ceviche","tacos","pastas"];
var paises = ["peru","colombia"]


//var plato = platillos[0];

var menu = [platillos,paises];

console.log(menu[0][0]);


//push agrega elemento

//pop saca un elemento

//join retorna ocmo una cadena de texto 

var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));

var platillos = platillosHTML.map(platillo => patillo.textContent)

var platillos = Array.of("tacos","pastas")

console.log(platillos)