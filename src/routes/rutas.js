const { Router } = require('express');
const router = Router();
const { newUsuario, udpUsuario, delUsuario, seaUsuario, getUsuario,
        newPersona, udpPersona, delPersona, seaPersona, getPersona,
        newRol, udpRol, delRol, seaRol, getRol,
        newProducto, udpProducto, delProducto, seaProducto, getProducto } = require('../controller/controlador')

// Usuario
router.post('/usuario', newUsuario);              // insertar
router.put('/usuario/:id', udpUsuario);           // actualizar
router.delete('/usuario/:id', delUsuario);        // eliminar
router.get('/usuario/:id', seaUsuario);           // por id
router.get('/usuario', getUsuario);               // all

// Persona
router.post('/registro', newPersona);              // insertar
router.put('/registro/:id', udpPersona);           // actualizar
router.delete('/registro/:id', delPersona);        // eliminar
router.get('/registro/:id', seaPersona);           // por id
router.get('/registro', getPersona);               // all

// Roles
router.post('/roles', newRol);              // insertar
router.put('/roles/:id', udpRol);           // actualizar
router.delete('/roles/:id', delRol);        // eliminar
router.get('/roles/:id', seaRol);           // por id
router.get('/roles', getRol);               // all

// Producto
router.post('/producto', newProducto);              // insertar
router.put('/producto/:id', udpProducto);           // actualizar
router.delete('/producto/:id', delProducto);        // eliminar
router.get('/producto/:id', seaProducto);           // por id
router.get('/producto', getProducto);               // all

module.exports = router;