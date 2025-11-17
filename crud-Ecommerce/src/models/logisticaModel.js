const mongoose = require('mongoose');

const logisticaSchema = new mongoose.Schema({
    pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    transportadora: { type: String, required: true },
    rastreamento: { type: String, unique: true },
    status: {
        type: String,
        enum: ['preparando', 'enviado', 'em_transito', 'entregue'],
        default: 'preparando'
    },
    criadoEm: { type: Date, default: Date.now }
});

module.exports =
  mongoose.models.Logistica || mongoose.model('Logistica', logisticaSchema);
