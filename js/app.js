"use strict"

var mensaje = "Hola forest, Hola";


var resultado;


//resultado = mensaje.indexOf("Hola");
resultado = mensaje.lastIndexOf("Hola");

//incase sensative
resultado  = mensaje.search(/ja/i)

console.log(resultado);