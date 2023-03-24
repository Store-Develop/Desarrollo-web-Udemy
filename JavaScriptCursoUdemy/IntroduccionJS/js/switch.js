const metodoPago = 'especie';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'bitcoint':
        console.log('Pagaste con bitcoint');
        break;
    case 'cheque':
        console.log('El Usuario va a pagar con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado.');
        break;
}