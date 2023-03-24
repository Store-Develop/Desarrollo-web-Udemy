//Arreglos o Arrays

//const numeros = [10, 20, 30, 40, 50];



const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//const arreglo = ["Hola", 10, true, "si", null, { nombre: "Juan", trabajo: "Programador" }, [, 1, 2, 3]]

//console.log(arreglo);

//Aceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// conocer la extencion de un arreglio
// console.log(numeros.length);

//Iterar un arreglo 
// numeros.forEach(function (numero) {
//     console.log(numero);
// })

//Agregando datos a un Array
//forma 1 poco comun.
// numeros[5] = 60;
// numeros[6] = 70;

//forma dos mas usada agrega al final del arreglo.
//numeros.push(60, 70, 80);

//forma tres agrega al inicio del arreglo.
//numeros.unshift(-10, -20, -30);
//console.table(numeros);
// elinimar elementos de un arreglo

//meses.pop();// elimina el ultimo elemento de un arreglo.

//meses.shift();// elimina el primer elemento de un arreglo.

//meses.splice(2, 1); // elimina el elemento que le indiquemos del arreglo.
//console.table(meses);

// Rest Operator o Spread Operator
// const nuevoArreglo = [...meses, "Junio"];
// console.log(nuevoArreglo);


//Arrey Methods
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

// forEach
meses.forEach(function (mes) {
    if (mes == "Marzo") {
        console.log('Marzo si existe!');
    }
});

//includes
let resultado = meses.includes('Marzo');

// Some ideal para arreglo de objetos.
resultado = carrito.some(function(producto){
    return producto.nombre === "Celular"
});

//Reduce

resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);

// filter

resultado = carrito.filter(function (producto) {
    return producto.precio < 400
});

resultado = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular'
});

console.log(resultado);







