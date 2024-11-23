/*
En JavaScript, cómo se pasa un dato (por valor o por referencia) depende del tipo de dato:

Primitivos (números, cadenas, booleanos, null, undefined, Symbol, y BigInt): siempre se pasan por valor.
Objetos (incluyendo arrays y funciones): siempre se pasan por referencia.
 */


// userName es una copia del valor primitivo, por lo que modificarla no afecta al objeto original.
// userPreferences apunta al mismo objeto en memoria, así que los cambios son visibles en el objeto original.

let user = {
    name: 'joshua',
    lastName: 'Marchena',
    age: 25,
}


let userName = user.name; // <--- acceso a propiedades de objetos

let { name, age} = user; // desestructura objetos - se pasa por valor

name = 'natalia'; // <--- modificando propiedades como variables
age = 17;

// modificando el objeto
userName = 'natalia';
// console.log(name);



console.log(userName);
console.log(user);

console.log(user.name === userName); 
// console.log(name === user.name); // true



// Primitivos: Siempre se pasan por valor (copia del valor).
// Objetos: Siempre se pasan por referencia (apuntan al mismo lugar en memoria).
// Cambiar el valor de una propiedad primitiva (como name) no afecta al original. Pero cambiar una propiedad de un objeto (como address.city) sí afecta al original.