"use strict"
//document load
//Timers


window.addEventListener('load',function(){
    
});

// var temporizador = setInterval(function (){
//     setColor();
// }, 2000);

setTimeout(function(){
    setColor();
},3000)



function setColor(){
    var pagina = document.body
    pagina.style.backgroundColor = pagina.style.backgroundColor == "red" ? "green" : "red"
}

function stopChangeColor(){
    clearInterval(temporizador);
}