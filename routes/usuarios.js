const { Router } = require('express');
const { usuarioPut, 
        usuariosPost, 
        usuarioDelete, 
        usuarioPatch, 
        usuarioGet} = require('../controllers/usuarios');
const router = Router();

router.get('/', usuarioGet);

router.put('/', usuarioPut);

router.post('/', usuariosPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);


module.exports = router;