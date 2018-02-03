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

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null
var contBanderas = document.getElementById('banderas')
var mensaje = document.getElementById('mensaje');

boton.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts);
    })

})

function mostrarDatos(posts){
    posts.map((post,i) => {
        let titulo = document.createElement('h1');

        titulo.innerHTML = (i +1) + " - "  + post.title
        //contenido.innerHTML = post.body

        contenedor.appendChild(titulo)
        //contenedor.appendChild(contedio)
    })
}

boton.addEventListener('click', function (){
    getPosts()
    .then(data => data.json())
    .then(posts =>{
        mostrarDatos(posts);
        return getCountries();
    })
    .then(data => data.json())
    .then(countries => {
        mostrarBanderas(countries);
    })
    .catch(error =>{
        mensaje.classList.toggle('hide');
        mensaje.innerHTML = error;
        setTimeout(() => mensaje.classList.toggle('hide'),6000)
    })

})

function getPosts(){
    return     fetch('https://jsonplaceholder.typicode.comm/posts')
}

function getCountries(){
    return     fetch('https://restcountries.eu/rest/v2/all')
}

function mostrarBanderas(countries){
    contBanderas.innerHTML = ''
    countries.map((country,i) => {
        let bandera = document.createElement('img')
        bandera.src = country.flag
        bandera.width = '20'
        bandera.height = '20'
        contBanderas.appendChild(bandera);
    })
}