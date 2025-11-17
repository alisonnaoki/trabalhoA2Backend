const express = require('express');
const router = express.Router();

const PedidoModel = require('../models/pedidosModel');
const { validarPedido } = require('../validators/pedidosValidator');

router.get('/pedidos', async (req, res) => {
    const pedidos = await PedidoModel.find().populate(['clienteId', 'itens.produtoId']);
    res.json(pedidos);
});

router.get('/pedidos/:id', async (req, res) => {
    const pedido = await PedidoModel.findById(req.params.id).populate(['clienteId', 'itens.produtoId']);
    if (!pedido) {
        return res.status(404).json({ erro: "Não encontrado" });
    }
    res.json(pedido);
});

router.post('/pedidos', validarPedido, async (req, res) => {
    const novoPedido = await PedidoModel.create(req.body);
    res.status(201).json(novoPedido);
});

router.put('/pedidos/:id', async (req, res) => {
    const atualizado = await PedidoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado){
        return res.status(404).json({ erro: "Não encontrado" });
    } 
    res.json(atualizado);
});

router.delete('/pedidos/:id', async (req, res) => {
    await PedidoModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;


