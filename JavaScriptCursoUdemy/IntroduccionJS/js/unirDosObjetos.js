// Objetos

const producto = {
    nombreProducto: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

// Unir dos objetos con Spread Operator

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);