// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {

    return 1.15 * total;

}


total = agregarCarrito(100);
total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
total = agregarCarrito(500);
total = agregarCarrito(600);
total = agregarCarrito(700);
total = agregarCarrito(800);
total = agregarCarrito(900);
total = agregarCarrito(1000);


console.log(total);

function formatoMoneda({ currency, totalAPagar }) {
    const formato = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
    });

    return formato.format(totalAPagar);
}

const totalAPagar = calcularImpuesto(total);

const pesos = formatoMoneda({
    currency: "COP",
    totalAPagar
});

console.log(`total a pagar con impuesto:  $${pesos}`);