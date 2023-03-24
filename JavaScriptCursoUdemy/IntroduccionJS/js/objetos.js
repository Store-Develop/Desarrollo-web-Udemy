//objetos
const producto = {
nombreProducto : "Monitor de 20 Pulgadas",
precio : 300,
disponible : true
}



//acceder a las propiedades de un objeto
// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

//forma dos de acceder a las propiedades de un objeto no tan comun verla.
//console.log(producto['nombreProducto']);

// Modificar objetos

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//Eliminar propiedades de un objeto.
delete producto.disponible

console.log(producto);