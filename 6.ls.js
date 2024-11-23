const fs = require('node:fs/promises');
/*

ls: Lista los archivos y carpetas de una ruta
-a: Lista archivos y carpetas de todas las subcarpetas
-l: Lista archivos y carpetas de una ruta


en los callbacks

1. error ----> el error siempre es primero en los callbacks
2. files ----> los archivos y carpetas de la  almacenados en un array


readdir: Lista los archivos y carpetas de una ruta

1. dirPath ----> ruta de la carpeta
2. callback ----> callback que se ejecuta después de que la función haya terminado
 */



fs.readdir('./', (err, files) => {  
    if (err) throw err;
    // console.log(files[0]); // <--- el primer archivo


    // files es un array de strings
    files.forEach(file => {
        console.log(file);
    });
});


// con promesas

// fs.readdir('./').then(files => {
//     // console.log(files[0]);
//     files.forEach(file => {
//         console.log(file);
//     });
// }).catch(err => {
//     throw err;
// });


// con async/await


// async function ls(){
//     try {
//         const files = await fs.readdir('./'); // <--- retornara un array de strings
//         // console.log(files[0]);
//         files.forEach(file => {
//             console.log(file);
//         });
//     } catch (err) {
//         throw err;
//     }
// }

// ls();