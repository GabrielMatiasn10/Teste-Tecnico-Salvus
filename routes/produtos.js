const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Caminhos CRUD
router.post('/produtos', produtoController.create);
router.get('/produtos', produtoController.findAll);
router.get('/produtos/:id', produtoController.findOne);
router.put('/produtos/:id', produtoController.update);
router.delete('/produtos/:id', produtoController.delete);

module.exports = router;
