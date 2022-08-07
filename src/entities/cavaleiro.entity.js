const crypto = require('node:crypto');

class CavaleiroEntity {
  constructor(cavaleiro) {
    this.id = cavaleiro.id ?? crypto.randomUUID();
    this.nome = cavaleiro.nome;
    this.categoria = cavaleiro.categoria;
    this.constelacao = cavaleiro.constelacao;
    this.tecnica = cavaleiro.tecnica;
    this.idade = cavaleiro.idade;
  }

  validObjectBody() {
    if (!this.nome) {
      throw new Error('Nome precisa ser informado');
    }
    if (!this.categoria) {
      throw new Error('Categoria precisa ser informada');
    }
    if (!this.constelacao) {
      throw new Error('Constelação precisa ser informada');
    }
    if (!this.tecnica) {
      throw new Error('Técnica precisa informada');
    }
    if (!this.idade) {
      throw new Error('Idade precisa ser informada');
    }
  }

  getCavaleiro() {
    return {
      id: this.id,
      nome: this.nome,
      categoria: this.categoria,
      contelacao: this.constelacao,
      tecnica: this.tecnica,
      idade: this.idade,
    };
  }
}

//exports
module.exports = CavaleiroEntity;
