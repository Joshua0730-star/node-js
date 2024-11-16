// FS ----> modulo que permite manipular el sistema de archivos

// manera clasica
const fs = require('node:fs');

const stats = fs.statSync('ejemplo.txt'); // trabaja de manera sincrónica

console.log(stats.isFile()); // si es un archivo
console.log(stats.isDirectory()); // si es un directorio
console.log(stats.isBlockDevice()); // si es un dispositivo de bloque
console.log(stats.isCharacterDevice()); // si es un dispositivo de caracteres
console.log(stats.isSymbolicLink()); // si es un enlace simbólico
console.log(stats.size); // tamaño del archivo en bytes