"use strict"


class Pantalla{

    constructor(marca,modelo,pulgadas){
        this.marca = marca;
        this.modelo = modelo
        this.pulgadas = pulgadas
    }

    encendido(){
        console.log(`la pantalla ${this.marca} se enciende`)
    }
    volumen(){
        console.log(`volumen `)
    }
    
    info(){
        console.log(` ${this.modelo} y  pulgadas ${this.pulgadas }`)
    }

    set peso(value){
        this.kgs = value.trim();
    }

    get peso(){
        return this.kgs
    }

}
//instansias
const tvSala = new Pantalla('Master','Oasis',50);
const tvHabitacion = new Pantalla('Origin','Asus',80);


