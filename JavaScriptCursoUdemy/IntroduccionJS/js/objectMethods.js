"use strict"; // Correr javeScript de modo estricto

// Objetos

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(NOMBRE OBJETO) no permite modificar, eliminar ni agregar nuevos elementos al objeto.
Object.freeze(producto);
producto.imagen = "imgagen.jpg";

// Nos dice si un objeto está sellado
console.log(Object.isFrozen(producto));

//FORMA DOS DE CONGELAR UN OBJETO

// Object.seal(NOMBRE OBJETO) no permite eliminar ni agregar nuevos elementos al objeto pero si permite modificar los existentes.
// Object.seal(producto);
// producto.imagen = "imgagen.jpg";

// // Nos dice si un objeto está sellado
// console.log(Object.isSealed(producto));

console.log(producto);