const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisión 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 }
];

/* ForEach solo puede ser usado en arreclos, 
Para iterar un listado y mostrar los elementos en pantalla
o enviarlos por consola utilizamos forEach*/

carrito.forEach(element => console.log(element.nombre));

//Map si queremos crear un nuevo arreglo es mejor usar el map
const arreglo2 = carrito.map(element => `${element.nombre} - $${element.precio}`);

console.log(arreglo2);