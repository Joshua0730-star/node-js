// FS- promesas ----> esto nos permitira ahorrarnos el poner "callback" en la función 
const fs = require('node:fs/promises'); // se debe utilizar "promises" para trabajar con promesas   

console.log('leyendo el primer archivo...');
fs.readFile('ejemplo.txt', 'utf8')
    .then(text => {
        console.log(text);
    })



console.log('haciendo cosas cuando lo esta leyendo...');
console.log('leyendo el segundo archivo...');

fs.readFile('ejemplo2.txt', 'utf8')
    .then(text => {
        console.log(text);
    })



console.log('finalizando...');


