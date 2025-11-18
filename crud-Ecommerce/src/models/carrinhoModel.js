const mongoose = require('mongoose');

const carrinhoSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    itens: [{
        produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
        quantidade: { type: Number, required: true, min: 1 }
    }],
    criadoEm: { type: Date, default: Date.now }
});

const CarrinhoModel = mongoose.model('Carrinho', schema)

module.exports = CarrinhoModel