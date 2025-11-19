const mongoose = require('mongoose');

const cupomSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    desconto: { type: Number, required: true, min: 0, max: 100 },
    validade: { type: Date, required: true },
    criadoEm: { type: Date, default: Date.now }
});

const CupomModel = mongoose.model('Cupom', cupomSchema)

module.exports = CupomModel