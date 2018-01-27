"use strict"
//this

const boton = document.querySelector('.boton');

boton.addEventListener('click',function(){
    console.log('pulsado');
}) 

boton.addEventListener('mouseover',function(){
    console.log('sobre');
}) 

boton.addEventListener('mouseout',function(){
    console.log('afuera');
}) 

// boton.addEventListener('click',()=>{
//     console.log(this);
//     this.location = 'google.com';
// })