const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
    pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    metodo: { type: String, enum: ['cartao', 'pix', 'boleto'], required: true },
    valor: { type: Number, required: true },
    status: { type: String, enum: ['pendente', 'concluido', 'falhou'], default: 'pendente' },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pagamento', pagamentoSchema);