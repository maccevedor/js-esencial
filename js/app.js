"use strict"

// find

var platillos = ['Ceviche','Mute']

var menu = [{
    nombre: "Ceviche",
    precio: 20,
    pais: "Peru"
},{
    nombre: "Mute",
    precio: 10,
    pais: "Colombia"
}]

//var numPlatillo = platillos.findIndex(platillo => platillo == 'Mute');
var numPlatillo = menu.findIndex(platillo => platillo.nombre == 'Mute');

console.log("platillo " , numPlatillo)