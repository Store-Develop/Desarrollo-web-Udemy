// TIPOS DE DATOS

//string o cadena de texto

const producto = "Monitor de 20 Pulgadas";

const producto2 = String('Monitor HD');

const tweet = 'Aprendiendo Javascript con el curso de Desarrollo Web Completo';

console.log(tweet.length);
console.log(tweet);
console.log(producto);
console.log(producto2);

//IndexOf  permite buscar palabras dentro de una cadena de texto (retorna una posición).
console.log(tweet.indexOf('Javascript'));
console.log(producto.indexOf('Tablet'));

// Include (retorna un boolean).
console.log(tweet.includes('Javascript'));
console.log(producto.includes('Tablet'));

//Números

const numero1 = 100;
const numero2 = 200;
const numero3 = 7;
const numero4 = 6;
const numero5 = -5;

console.log(numero1 + numero2);
console.log(numero2 - numero1);
console.log(numero1 * numero2);
console.log(numero2 / numero1);
console.log(numero3 % numero4);