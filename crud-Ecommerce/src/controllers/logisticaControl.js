const express = require('express');
const router = express.Router();

const LogisticaModel = require('../models/logisticaModel');
const { validarLogistica } = require('../validators/logisticaValidator');

router.get('/logistica', async (req, res) => {
    const logisticos = await LogisticaModel.find().populate('pedidoId');
    res.json(logisticos);
});

router.get('/logistica/:id', async (req, res) => {
    const logistica = await LogisticaModel.findById(req.params.id).populate('pedidoId');
    if (!logistica) return res.status(404).json({ erro: "Não encontrado" });
    res.json(logistica);
});

router.post('/logistica', validarLogistica, async (req, res) => {
    const novaLogistica = await LogisticaModel.create(req.body);
    res.status(201).json(novaLogistica);
});

router.put('/logistica/:id', async (req, res) => {
    const atualizado = await LogisticaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ erro: "Não encontrado" });
    res.json(atualizado);
});

router.delete('/logistica/:id', async (req, res) => {
    await LogisticaModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;


