$(document).ready(function(){

var tienda = {
	nombre: 'tienda 4 esquinas',
	calcular: function(costo1,costos2){
		return costo1;	
	},
	saludar: function(){
		var mensaje = "hola"
		return mensaje;
	}
};

console.log(tienda.nombre)
console.log(tienda.calcular(20,30))
console.log(tienda.saludar())


var btnSaludar = document.getElementById('btnSaludar');

btnSaludar.addEventListener('click',function(){
	console.log(tienda.saludar());

});
});
