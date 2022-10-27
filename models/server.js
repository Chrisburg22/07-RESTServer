const express = require('express');
const cors = require('cors');

class Server{
/**
 * Él constructor crea las propiedades de nuestra clase
 * La propiedad app es la aplicacion de express con todos sus metodos
 * La propiedad port hace referencia a la variable de entorno PORT
 * Routes es una funcion que manejara las rutas de nuestro Webserver
 * Listen es el metodo con el cual vamos a poder ejecutar nuestra aplicacion
 */
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );
        //Directorio publico
        this.app.use( express.static('public') );
    }
    routes(){
        /**
         * endpoins muy comunes
         */
        //Petición get
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
          
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Hola Mundo");
        });
    };
}

module.exports = Server;