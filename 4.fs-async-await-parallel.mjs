// FS- async await 

/*
----> en ESmodules, se puede utilizar await en el cuerpo de el codigoo
----> en CMjs. se debe hacer uso de una funcion asincrona
*/


import { readFile } from 'node:fs/promises'; 


Promise.all([
    readFile('./ejemplo.txt', 'utf8'),
    readFile('ejemplo2.txt', 'utf8')
]).then(([text, text2]) => {
    console.log(text); // primer archivo
    console.log(text2); // segundo archivo
})
