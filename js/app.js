//@ts-check
console.time("revision");

var animales = ["p", "a"];

for (var i = 0; i < 10000; i++) {
  animales[i] = i;
}

//terminar con la misma etiqueta
console.timeEnd("revision");
