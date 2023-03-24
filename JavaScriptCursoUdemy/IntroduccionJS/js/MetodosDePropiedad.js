//Métodos de propiedad

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción: ${id}`);
    }, pausar: function () {
        console.log('Pausando...');
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproducinedo la playlist: ${nombre}`);
    }
}
//Agregando propiedades por fuera de un objeto
reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Mi nueva PlayList');

reproductor.reproducirPlaylist('Mi nueva PlayList');
