const { Router } = require('express');
const ruta = Router;
const { getCliente } = require('../controller/controlador')

// Ruta de prueba
ruta.get('/clientes', getCliente);

module.exports = ruta;