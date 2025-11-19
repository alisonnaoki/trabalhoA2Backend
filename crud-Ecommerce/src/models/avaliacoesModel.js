const mongoose = require('mongoose');

const avaliacoesSchema = new mongoose.Schema({
    produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    nota: { type: Number, required: true, min: 1, max: 5 },
    comentario: { type: String },
    criadoEm: { type: Date, default: Date.now }
});

const AvaliacaoModel = mongoose.model('Avaliacoes', avaliacoesSchema);

module.exports = AvaliacaoModel;
