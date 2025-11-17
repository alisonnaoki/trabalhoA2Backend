const express = require('express');
const router = express.Router();

const AvaliacaoModel = require('../models/avaliacoesModel');
const { validarAvaliacao } = require('../validators/avaliacoesValidator');

router.get('/avaliacoes', async (req, res) => {
const avaliacoes = await AvaliacaoModel.find()
.populate(['produtoId', 'clienteId']);
res.json(avaliacoes);
});

router.get('/avaliacoes/:id', async (req, res) => {
const avaliacao = await AvaliacaoModel.findById(req.params.id)
.populate(['produtoId', 'clienteId']);
if (!avaliacao) return res.status(404).json({ erro: "Não encontrado" });
res.json(avaliacao);
});

router.post('/avaliacoes', validarAvaliacao, async (req, res) => {
const novaAvaliacao = await AvaliacaoModel.create(req.body);
res.status(201).json(novaAvaliacao);
});

router.put('/avaliacoes/:id', async (req, res) => {
const atualizado = await AvaliacaoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!atualizado) return res.status(404).json({ erro: "Não encontrado" });
res.json(atualizado);
});

router.delete('/avaliacoes/:id', async (req, res) => {
await AvaliacaoModel.findByIdAndDelete(req.params.id);
res.status(204).send();
});

module.exports = router;