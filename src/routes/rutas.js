const { Router } = require('express');
const router = Router();
const { getCliente, newCliente } = require('../controller/controlador')

// Ruta de prueba
router.get('/clientes', getCliente);

router.post('/clientes', newCliente);

module.exports = router;