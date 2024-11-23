const path = require('node:path'); // importando modulo nativo


console.log(path.sep); // separador de rutas del sistema operativo

// \: separador de rutas de windows
// /: separador de rutas de linux
// /: separador de rutas de mac


// unir rutas ---> crea las rutas ahorrandonos tiempo de escribir
const filePath = path.join( 'Lenovo', 'workspace', 'curso-node-js', 'ejemplo.txt');
console.log(filePath); // Lenovo/workspace/curso-node-js/ejemplo.txt


// Nombre de archivo ----> Nombre del ultimo elemento de la ruta
const base = path.basename(filePath);
console.log(base); // ejemplo.txt 

const fileName = path.basename('Lenovo/workspace/curso-node-js/ejemplo.py', '.py');
console.log(fileName); // ejemplo ----> porque le quito la extension


// Extension de archivo ----> Extension del ultimo elemento de la ruta
const fileExtension = path.extname(base);
const fileExtension2 = path.extname('img.dark.png');
console.log(fileExtension); // .txt
console.log(fileExtension2); // .png