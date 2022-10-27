const {response} = require('express');

const usuarioGet = (req, res=response) => { 
    res.json({
        msg: 'get API - Controller'
      });
}

const usuarioPut =  (req, res=response) => { 
    res.json({
      msg: 'put API - Controller'
    });
}

const usuariosPost = (req, res=response) => { 
    res.json({
      msg: 'post API . Controller'
    });
}

const usuarioDelete = (req, res=response) => { 
    res.json({
      msg: 'delete API - Controller'
    });
}

const usuarioPatch = (req, res=response) => { 
    res.json({
      msg: 'patch API - Controller'
    });
}

module.exports = {
    usuarioGet,
    usuarioPut,
    usuariosPost,
    usuarioDelete,
    usuarioPatch,
}