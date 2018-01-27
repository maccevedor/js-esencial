"use strict"
 
function saludar(nombre,edad,...masIngredientes){
    var saldo = "Hola";
    var resultado;
    console.log(masIngredientes)
    resultado = nombre + edad;
    return resultado
}

saludar('Mao',29,'Arroz','con','Pollo'); 