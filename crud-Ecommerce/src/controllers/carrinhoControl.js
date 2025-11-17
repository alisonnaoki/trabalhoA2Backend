const express = require('express');
const router = express.Router();

const CarrinhoModel = require('../models/carrinhoModel');
const { validarCarrinho } = require('../validators/carrinhoValidator');

router.get('/carrinho', async (req, res) => {
const carrinhos = await CarrinhoModel.find()
.populate(['clienteId', 'itens.produtoId']);
res.json(carrinhos);
});

router.get('/carrinho/:id', async (req, res) => {
const carrinho = await CarrinhoModel.findById(req.params.id)
.populate(['clienteId', 'itens.produtoId']);
if (!carrinho) return res.status(404).json({ erro: "Não encontrado" });
res.json(carrinho);
});

router.post('/carrinho', validarCarrinho, async (req, res) => {
const novoCarrinho = await CarrinhoModel.create(req.body);
res.status(201).json(novoCarrinho);
});

router.put('/carrinho/:id', async (req, res) => {
const atualizado = await CarrinhoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!atualizado) return res.status(404).json({ erro: "Não encontrado" });
res.json(atualizado);
});

router.delete('/carrinho/:id', async (req, res) => {
await CarrinhoModel.findByIdAndDelete(req.params.id);
res.status(204).send();
});

module.exports = router;