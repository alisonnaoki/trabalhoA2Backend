const express = require('express');
const router = express.Router();

const CategoriaModel = require('../models/categoriasModel');
const { validarCategoria } = require('../validators/categoriasValidator');

router.get('/categorias', async (req, res) => {
    const categorias = await CategoriaModel.find();
    res.json(categorias);
});

router.get('/categorias/:id', async (req, res) => {
    const categoria = await CategoriaModel.findById(req.params.id);
    if (!categoria) return res.status(404).json({ erro: "Não encontrado" });
    res.json(categoria);
});

router.post('/categorias', validarCategoria, async (req, res) => {
    const novaCategoria = await CategoriaModel.create(req.body);
    res.status(201).json(novaCategoria);
});

router.put('/categorias/:id', async (req, res) => {
    const atualizado = await CategoriaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ erro: "Não encontrado" });
    res.json(atualizado);
});

router.delete('/categorias/:id', async (req, res) => {
    await CategoriaModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;