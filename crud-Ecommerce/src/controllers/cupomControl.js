const express = require('express');
const router = express.Router();

const CupomModel = require('../models/cupomModel');
const { validarCupom } = require('../validators/cupomValidator');

router.get('/cupons', async (req, res) => {
    const cupons = await CupomModel.find().populate('clienteId');
    res.json(cupons);
});

router.get('/cupons/:id', async (req, res) => {
    const cupom = await CupomModel.findById(req.params.id).populate('clienteId');
    if (!cupom){
        return res.status(404).json({ erro: "Não encontrado" });
    } 
    res.json(cupom);
});

router.post('/cupons', validarCupom, async (req, res) => {
    const novoCupom = await CupomModel.create(req.body);
    res.status(201).json(novoCupom);
});

router.put('/cupons/:id', async (req, res) => {
    const atualizado = await CupomModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado){
        return res.status(404).json({ erro: "Não encontrado" });
    } 
    res.json(atualizado);
});

router.delete('/cupons/:id', async (req, res) => {
    await CupomModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;