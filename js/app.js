"use strict"

var persona = { nombre: 'Mao' , twitter: 'ace'};

var personas = [
    {nombre: 'Mao0' , twitter: 'ace0'},
    {nombre: 'Mao1' , twitter: 'ace1'},
    {nombre: 'Mao2' , twitter: 'ace2'},
    persona
];

//Convertir en texto
var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON);