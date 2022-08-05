const cavaleiros = [
  {
    id: 1,
    nome: 'Seiya',
    constelacao: 'Pegasus',
    categoria: 'Bronze',
    tecnica: 'Meteoro de pegasus',
    idade: 13,
  },
  {
    id: 2,
    nome: 'Shiryu',
    constelacao: 'Dragão',
    categoria: 'Bronze',
    tecnica: 'Colera do Dragão',
    idade: 14,
  },
  {
    id: 3,
    nome: 'Ikki',
    constelacao: 'Fenix',
    categoria: 'Bronze',
    tecnica: 'Ave Fenix',
    idade: 15,
  },
  {
    id: 4,
    nome: 'Mu',
    constelacao: 'Aries',
    categoria: 'Ouro',
    tecnica: 'Extinção estelar',
    idade: 20,
  },
];

const findAllCavaleirosService = () => {
  return cavaleiros;
};

const findByIdCavaleiroService = (parametroId) => {
  const cavaleiro = cavaleiros.find(
    (cavaleiro) => cavaleiro.id === parametroId,
  );
  return cavaleiro;
};

const createCavaleiroService = (newCavaleiro) => {
  const newId = cavaleiros.length + 1;
  newCavaleiro.id = newId;
  cavaleiros.push(newCavaleiro);
  return newCavaleiro;
};

const updateCavaleiroService = (id, cavaleiroEdited) => {
  cavaleiroEdited['id'] = id;
  const cavaleiroIndex = cavaleiros.findIndex(
    (cavaleiro) => cavaleiro.id == id,
  );
  cavaleiros[cavaleiroIndex] = cavaleiroEdited;
  return cavaleiroEdited;
};

const deleteCavaleiroService = (id) => {
  const cavaleiroIndex = cavaleiros.findIndex(
    (cavaleiro) => cavaleiro.id == id,
  );
  return cavaleiros.splice(cavaleiroIndex, 1);
};

module.exports = {
  findAllCavaleirosService,
  findByIdCavaleiroService,
  createCavaleiroService,
  updateCavaleiroService,
  deleteCavaleiroService,
};
