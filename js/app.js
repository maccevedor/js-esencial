"use strict"
 
//Function Arrow | Fat Arrow | Lambda

var saludar = nombre => "Hola" + nombre;

console.log(saludar("Mao"));

var sumar = cantidad=>cantidad+10;

console.log(sumar(10));

var calcular = (datoA,datoB) => datoA+datoB;
console.log(calcular(15,10));

var generar = (datoA,datoB) => {
    var datoC = 5
    return datoA+datoB+datoC;
}
console.log(generar(15,10));


var validar = ()=>{
    return "validacion correcta";
}
console.log(validar());