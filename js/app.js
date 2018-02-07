"use strict"

var mensaje = 'llegaban por montones ,primero 10 , despues 20 , despues 35 y se duplicaban'

//no se va mezclar con los nuemors
var patron = /\b(\d+)\b/g


var match

while(match = patron.exec(mensaje)){
	console.log('se encontro ', match[1],' en ', match.index)

}


