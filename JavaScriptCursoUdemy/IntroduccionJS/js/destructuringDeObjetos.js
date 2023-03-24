//Objetos
const producto = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio : 300,
    disponible : true
    }

    // Seleccionar una propiedad de un objeto y almacenarla en una variable FORMA ANTERIOR DE HACERLO.
    /*const precioProducto = producto.precio;
    const nombreProducto = producto.nombreProducto;

    console.log(precioProducto);
    console.log(nombreProducto);*/

    // FORMA NUEVA Destructuring
    const {nombreProducto, precio, disponible} = producto;
    console.log(nombreProducto);
    console.log(precio);
    console.log(disponible);