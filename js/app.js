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
},{
    nombre: "Pasta",
    precio: 11,
    pais: "Italy"
},{
    nombre: "Ajiaco",
    precio: 15,
    pais: "Colombia"
}]

//var numPlatillo = platillos.findIndex(platillo => platillo == 'Mute');
//var numPlatillo = menu.find(platillo => platillo.nombre == 'Mute');
//var numPlatillo = menu.filter(platillo => platillo.pais == 'Colombia');

var resultado;
//resultado = menu.some(platillo => platillo.precio < 20)
resultado = menu.every(platillo => platillo.precio < 20)

console.log("menus " , resultado)

function mostrarDatos(post){
    postMessage.map((post,i))
}