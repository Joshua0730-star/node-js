// FS-readFile ----> lee el contenido de un archivo

// el readFileSync es una función sincrónica, y para utilizar de manera ASINCRONA se debe utilizar "readFile" solamente
const fs = require('node:fs');

console.log('leyendo el primer archivo...');

/*
 * readFile(path, options, callback) <----- esto para trabajar de manera ASINCRONA
 * path: ruta del archivo
 * options: opciones de lectura
 * callback: función que se ejecuta cuando se ha terminado de leer el archivo
 */

fs.readFile('ejemplo.txt', 'utf8', (err, text) => {
    if (err) throw err;
    console.log(text);
});



console.log('haciendo cosas cuando lo esta leyendo...');
console.log('leyendo el segundo archivo...');

fs.readFile('ejemplo2.txt', 'utf8', (err, text) => {    
    if (err) throw err;
    console.log(text);
});



// MANERA DE TRANSFORMAR DE CALLBACK A PROMESAS

/*
esto lo puedes llegar a utilizar en caso de que no haya posibilidad de trabajar con promesas en los modulos nativos

"no es tan recomendable, simplemente es una alternativa!"

 */
// const fs = require('node:fs');
// const { promisify } = require('node:util');


// const readFilePromise = promisify(fs.readFile);

// readFilePromise('ejemplo.txt', 'utf8')
//     .then(text => {
//         console.log(text);
//     })
// console.log('segundo ejemplo');