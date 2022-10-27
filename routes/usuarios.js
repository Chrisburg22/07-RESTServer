const { Router } = require('express');
const { usuarioPut, 
        usuariosPost, 
        usuarioDelete, 
        usuarioPatch, 
        usuarioGet} = require('../controllers/usuarios');
const router = Router();

router.get('/', usuarioGet);

router.put('/:id', usuarioPut);

router.post('/', usuariosPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);


module.exports = router;