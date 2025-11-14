const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', clientesSchema);