"use strict"

class Producto{
    constructor(numSerie){
        this.numSerie = numSerie
        this.tiempoGarantia = 100
    }

    static get infoTienda(){
        console.log('productos');
    }

    set garantia(value){
        this.tiempoGarantia -= value
    }

    get garantia(){
        return this.tiempoGarantia
    }
}

class Pantalla extends Producto{

    constructor(numSerie,marca,modelo,pulgadas){
        super(numSerie);
        this.marca = marca;
        this.modelo = modelo
        this.pulgadas = pulgadas
    }

    encendido(){
        this.garantia -1
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
const tvSala = new Pantalla('111','Master','Oasis',50);
const tvHabitacion = new Pantalla('222','Origin','Asus',80);


