const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    itens: [{
        produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
        quantidade: { type: Number, required: true },
        precoUnitario: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pendente', 'pago', 'enviado', 'entregue'],
        default: 'pendente'
    },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', pedidosSchema);