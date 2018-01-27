"use strict"
 
//parameter Spread
function saludar(nombre,edad,ingredientes3,...otros){
    var saldo = "Hola";
    var resultado;
    console.log(nombre + edad + ingredientes3 + ' otro '+ otros)
    resultado = nombre + edad;
    return resultado
}

var ingredientesBase = ['Pollo','Tomate']

saludar(...ingredientesBase,'Mao','pescado','chile'); 