// For Loop

// for (let i = 0; i < 11; i++) {
//     console.log(i);

// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`El Número ${i} es PAR.`);
//     }else{
//         console.log(`El Número ${i} es IMPAR.`);
//     }

// }

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
let precio = 0;
for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    precio += element.precio;
}
console.log(precio);

// While Loop

// let i = 1; // Valor inicial

// while (i <= 100) {// Condición

//     if (i % 2 === 0) {
//         console.log(`El Número ${i} es PAR`);
//     } else {
//         console.log(`El Número ${i} es IMPAR`);
//     }
//     i++// Incremento
// }

// let i = 0; // Valor inicial
// while (i <= carrito.length) {// Condición
//     console.log(carrito[i].nombre);
//     i++// Incremento
// }

let i = 0;
//Do While Loop

do{

    console.log(i);


    i++
}while(i <10)