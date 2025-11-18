const express = require('express');
const router = express.Router();

const ClienteModel = require('../models/clientesModel')
const { validarCliente } = require('../validators/clientesValidator');

router.get('/clientes', async (req, res) => {
    const clientes = await ClienteModel.find();
    res.json(clientes);
});

router.get('/clientes/:id', async (req, res) => {
    const cliente = await ClienteModel.findById(req.params.id);
    if (!cliente) return res.status(404).json({ erro: "Não encontrado" });
    res.json(cliente);
});

router.post('/clientes', validarCliente, async (req, res) => {
    const novoCliente = await ClienteModel.create(req.body);
    res.status(201).json(novoCliente);
});

router.put('/clientes/:id', async (req, res) => {
    const atualizado = await ClienteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ erro: "Não encontrado" });
    res.json(atualizado);
});

router.delete('/clientes/:id', async (req, res) => {
    await ClienteModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;