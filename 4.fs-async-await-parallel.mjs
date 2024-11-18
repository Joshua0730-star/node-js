// FS- async await 

/*
----> en ESmodules, se puede utilizar await en el cuerpo de el codigoo
----> en CMjs. se debe hacer uso de una funcion asincrona
*/


import { readFile } from 'node:fs/promises';


console.log('iniciando procesos...');

Promise.all([
    readFile('./ejemplo.txt', 'utf8'),
    readFile('ejemplo2.txt', 'utf8')
]).then(([text, text2]) => {
    console.log(text); // primer archivo
    console.log(text2); // segundo archivo
})


console.log('finalizando...');

function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(4,6)); // 10

/*
Promise.all:

Permite ejecutar varias promesas al mismo tiempo.
Recibe un array de promesas y espera a que todas se resuelvan.
Si todas se resuelven correctamente, retorna una única promesa con un array de resultados.
.then(([text, text2]) => {...}):

Maneja el resultado de las promesas.
Usa desestructuración para obtener los valores resueltos (text y text2), que contienen el contenido de los archivos.

 */



/* !VENTAJAS!

Ejecución eficiente:

Ambas operaciones de lectura se ejecutan al mismo tiempo, reduciendo el tiempo total de espera comparado con ejecutarlas en secuencia.
Fácil manejo de resultados:

Promise.all devuelve los resultados ordenados en el mismo orden que las promesas en el array, lo que simplifica el manejo de datos.
Errores centralizados:

Si alguna promesa falla, Promise.all rechaza con el error correspondiente, facilitando la gestión de excepciones.
 */