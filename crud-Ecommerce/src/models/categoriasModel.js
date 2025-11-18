const mongoose = require('mongoose');

const categoriasSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    descricao: { type: String },
    criadoEm: { type: Date, default: Date.now }
});

const CategoriaModel = mongoose.model('Categorias', schema)

module.exports = CategoriaModel