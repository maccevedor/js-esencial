var exp1 = /y/g

//var concidencia = exp1.exec('subr yfx sibr yfg')


exp1.lastIndex = 6;

var concidencia = exp1.exec('subr yfx sibr yfg')


console.log(concidencia);
console.log(concidencia.lastIndex);


var exp2 = /\d/g

console.log(exp2.exec(' 4 tacos y agua'));
console.log(exp2.exec(' 4 tacos y agua'));
//esto para que empiece de neuvo
exp2.lasIndex = 0
console.log(exp2.exec(' 4 tacos y agua'));
