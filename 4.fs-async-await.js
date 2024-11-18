// FS- async await 

/*
----> en ESmodules, se puede utilizar await en el cuerpo de el codigoo
----> en CMjs. se debe hacer uso de una funcion asincrona o "autoinvocada"
*/


const { readFile } = require('node:fs/promises');  

// IIFE - Immediately Invoked Function Expression
(
    async () => {
        console.log('leyendo el primer archivo...');
        const text = await readFile('./ejemplo.txt', 'utf8');
        console.log(text);
            
        console.log('haciendo cosas cuando lo esta leyendo...');
        console.log('leyendo el segundo archivo...');
            
        const text2 = await readFile('ejemplo2.txt', 'utf8');
        console.log(text2);
})()





function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(4,2)); //  6 