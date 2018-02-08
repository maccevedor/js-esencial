var persona = {
	nombre: "Persona",
	email: "mao@gmail.com",
	twitter: 'asda',
	saludar: function(){
		return 'hola'
	}
}

var dato = ""

for (dato in persona){
	console.log(dato, persona[dato]);

}
