//This

const reservacion = {
    nombre: 'Juan',
    apellido: 'Perez',
    total: 1000000,
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Perez',
    total: 500,
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();