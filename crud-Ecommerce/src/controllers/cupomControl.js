const express = require('express');
const router = express.Router();

const CupomModel = require('../models/cupomModel');
const { validarCupom } = require('../validators/cupomValidator');

// DEBUG — mostra o JSON recebido no POST
router.post('/cupons', (req, res, next) => {
    console.log("BODY RECEBIDO ->", req.body);
    next(); 
});

// LISTAR TODOS
router.get('/cupons', async (req, res) => {
    try {
        const cupons = await CupomModel.find();
        res.json(cupons);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar cupons" });
    }
});

// BUSCAR POR ID
router.get('/cupons/:id', async (req, res) => {
    try {
        const cupom = await CupomModel.findById(req.params.id);
        if (!cupom) {
            return res.status(404).json({ erro: "Não encontrado" });
        }
        res.json(cupom);
    } catch (error) {
        res.status(400).json({ erro: "ID inválido" });
    }
});

// CRIAR CUPOM
router.post('/cupons', validarCupom, async (req, res) => {
    try {
        const novoCupom = await CupomModel.create(req.body);
        res.status(201).json(novoCupom);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ erro: "Código de cupom já existe" });
        }
        res.status(400).json({ erro: "Erro ao criar cupom" });
    }
});

// ATUALIZAR
router.put('/cupons/:id', async (req, res) => {
    try {
        const atualizado = await CupomModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!atualizado) {
            return res.status(404).json({ erro: "Não encontrado" });
        }

        res.json(atualizado);

    } catch (error) {
        res.status(400).json({ erro: "Erro ao atualizar cupom" });
    }
});

// DELETAR
router.delete('/cupons/:id', async (req, res) => {
    try {
        const deletado = await CupomModel.findByIdAndDelete(req.params.id);
        if (!deletado) {
            return res.status(404).json({ erro: "Não encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ erro: "ID inválido" });
    }
});

module.exports = router;
