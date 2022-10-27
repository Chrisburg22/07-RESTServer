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
        this.app.get('/app', function (req, res) { 
          res.json({
            msg: 'get API'
          });
        });
        this.app.put('/app', function (req, res) { 
            res.json({
              msg: 'put API'
            });
        });
        this.app.post('/app', function (req, res) { 
            res.json({
              msg: 'post API'
            });
        });
        this.app.delete('/app', function (req, res) { 
            res.json({
              msg: 'delete API'
            });
        });
          
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Hola Mundo");
        });
    };
}

module.exports = Server;