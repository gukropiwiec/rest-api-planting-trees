const mongoose = require('mongoose');

const TreeSchema = mongoose.Schema({
    descricao_local: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    dataHora: String,
    nome: String,
    nome_cientifico: String,
    nome_popular: String,
    nativa: Boolean,
    foto_url: String
});


module.exports = mongoose.model('Tree', TreeSchema);