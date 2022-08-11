const { Schema, model } = require('mongoose');

const cavaleiroSchema = new Schema({
  id: { type: String, required: true },
  nome: { type: String, required: true },
  constelacao: { type: String, required: true },
  categoria: { type: String, required: true },
  tecnica: { type: String, required: true },
  idade: { type: Number, required: true },
});

const Cavaleiro = model('cavaleiros', cavaleiroSchema);

module.exports = Cavaleiro;
