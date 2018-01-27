"use strict"
 
// callbaks

function calcular(datoA,datoB,sumarCB,restarCB){
    var sumar = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(sumar);
    restarCB(restar);
}

calcular (2,3,function(resultado){
    console.log('suma ', resultado)
},function(resultado){
    console.log('Restar',resultado)
})