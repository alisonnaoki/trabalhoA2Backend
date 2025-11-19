const mongoose = require('mongoose');

const fornecedoresSchema = new mongoose.Schema({
nome: { type: String, required: true },
contato: { type: String, required: true },
cnpj: { type: String, required: true, unique: true },
produtosFornecidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produto' }],
criadoEm: { type: Date, default: Date.now }
});

const FornecedorModel = mongoose.model('Fornecedores', fornecedoresSchema)

module.exports = FornecedorModel
