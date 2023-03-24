// const puntaje = 100;

// if (puntaje !== 1000) {
//     console.log(`El puntaje no es igual a 1000.`);

// }else{
//     console.log(`Sí, el puntaje es: ${puntaje}`);
// }

// const efectivo = 700;
// const carrito = 800;

// if (efectivo > carrito) {
//     console.log('El Usuario puede pagar.')
// }else{
//     console.log('¡Iluso, Fondos Insuficientes!');
// }

const rol = 'VISITANTE';

if (rol == 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema.');
}else if(rol == 'EDITOR'){
    console.log('Eres editor puedes ingresar pero no puedes hacer mucho.');
} else {
    console.log('No tienes acceso');
}