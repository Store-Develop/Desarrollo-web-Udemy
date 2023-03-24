//Arrow functions

/*Cuando solo se tiene una linea dentro de los parentesis estos son opcionales
Al igual que cuando solo pasamos 1 parametro a la función los parentesis son opcionales*/

const sumar = (n1, n2) => console.log(n1 + n2);

sumar(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo: ${tecnologia}`);

aprendiendo('JavaScript');

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
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
meses.forEach(mes => {
    if (mes == "Marzo")
        console.log('Marzo si existe!');

});
// Some ideal para arreglo de objetos.
resultado = carrito.some(producto => producto.nombre === "Celular"
);
//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// filter
resultado = carrito.filter(producto => producto.precio < 400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular'
);
console.log(resultado);

