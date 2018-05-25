const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/index');

router.get('/', IndexController.index);

router.get('/products', IndexController.listaDeEstudiantes);

router.post('/nuevoEstudiante', IndexController.agregarEstudiante);

module.exports = router;