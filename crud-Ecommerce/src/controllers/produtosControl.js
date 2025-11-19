const express = require('express');
const router = express.Router();

const ProdutoModel = require('../models/produtosModel');
const { validarProduto } = require('../validators/produtosValidator');

// GET ALL
router.get('/produtos', async (req, res) => {
    const produtos = await ProdutoModel.find().populate('categoriaId');
    res.json(produtos);
});

// GET by ID
router.get('/produtos/:id', async (req, res) => {
    const produto = await ProdutoModel.findById(req.params.id).populate('categoriaId');
    
    if (!produto) {
        return res.status(404).json({ erro: "Não encontrado" });
    }

    res.json(produto);
});

// POST
router.post('/produtos', validarProduto, async (req, res) => {
    const novoProduto = await ProdutoModel.create(req.body);
    res.status(201).json(novoProduto);
});

// PUT
router.put('/produtos/:id', async (req, res) => {
    const atualizado = await ProdutoModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!atualizado) {
        return res.status(404).json({ erro: "Não encontrado" });
    }

    res.json(atualizado);
});

// DELETE
router.delete('/produtos/:id', async (req, res) => {
    await ProdutoModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
