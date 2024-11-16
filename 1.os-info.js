// os ----> modulo que brinda información sobre el sistema operativo

// manera clasica
const os = require('node:os');

// manera recomendada

// import os from 'node: os';

console.log('Modelo:' ,os.hostname());
console.log('Tipo:' ,os.type());
console.log('Nombre:' ,os.platform());
console.log('arquitectura:' ,os.arch());
console.log('Versión:' ,os.release());
console.log('CPUs: ', os.cpus());
console.log('Total de memoria: ', os.totalmem());
console.log('Memoria disponible: ', os.freemem()); 
