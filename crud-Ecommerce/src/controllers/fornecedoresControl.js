const express = require('express');
const router = express.Router();

const FornecedorModel = require('../models/fornecedoresModel');
const { validarFornecedor } = require('../validators/fornecedoresValidator');

router.get('/fornecedores', async (req, res) => {
    const fornecedores = await FornecedorModel.find().populate('produtosFornecidos');
    res.json(fornecedores);
});

router.get('/fornecedores/:id', async (req, res) => {
    const fornecedor = await FornecedorModel.findById(req.params.id).populate('produtosFornecidos');
    if (!fornecedor){
        return res.status(404).json({ erro: "Não encontrado" });
    } 
    res.json(fornecedor);
});

router.post('/fornecedores', validarFornecedor, async (req, res) => {
    const novoFornecedor = await FornecedorModel.create(req.body);
    res.status(201).json(novoFornecedor);
});

router.put('/fornecedores/:id', async (req, res) => {
    const atualizado = await FornecedorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado){
        return res.status(404).json({ erro: "Não encontrado" });
    }
    res.json(atualizado);
});

router.delete('/fornecedores/:id', async (req, res) => {
    await FornecedorModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;