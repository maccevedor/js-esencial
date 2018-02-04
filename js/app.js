"use strict"


var valor1 = 100
var valor2 = 10

try{
    if(valor1 < valor2){
        console.log('pase');
    }else{
        throw new Error('Error por todo')
    }

}catch(error){
    console.log(error.name);
}