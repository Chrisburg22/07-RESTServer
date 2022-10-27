const {response,request} = require('express');

const usuarioGet = (req=request, res=response) => { 
    const {q, nombre= 'No name', apikey, page=1, limit} = req.query;
    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
      });
}

const usuarioPut =  (req, res=response) => { 
    const id = req.params.id;
    res.json({
      msg: 'put API - Controller',
      id
    });
}

const usuariosPost = (req, res=response) => { 
    const body = req.body;
    res.json({
      msg: 'post API . Controller',
      body
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