const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true, min: 0 },
    categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    estoque: { type: Number, required: true, default: 0 },
    imagemUrl: { type: String },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produto', produtosSchema);