const express = require('express');
const router = express.Router();

const PagamentoModel = require('../models/pagamentoModel');
const { validarPagamento } = require('../validators/pagamentoValidator');

router.get('/pagamentos', async (req, res) => {
    const pagamentos = await PagamentoModel.find().populate('pedidoId');
    res.json(pagamentos);
});

router.get('/pagamentos/:id', async (req, res) => {
    const pagamento = await PagamentoModel.findById(req.params.id).populate('pedidoId');
    if (!pagamento) return res.status(404).json({ erro: "Não encontrado" });
    res.json(pagamento);
});

router.post('/pagamentos', validarPagamento, async (req, res) => {
    const novoPagamento = await PagamentoModel.create(req.body);
    res.status(201).json(novoPagamento);
});

router.put('/pagamentos/:id', async (req, res) => {
    const atualizado = await PagamentoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ erro: "Não encontrado" });
    res.json(atualizado);
});

router.delete('/pagamentos/:id', async (req, res) => {
    await PagamentoModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;