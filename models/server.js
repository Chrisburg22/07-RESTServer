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
      //CORS
      this.app.use( cors() );

      // Lectura y parseo del body
      this.app.use( express.json() );
      
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
          console.log(`El servidor esta corriendo en el puerto ${this.port}`);
      });
    };
}

module.exports = Server;