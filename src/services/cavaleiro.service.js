const cavaleiros = require('../mocks/cavaleiros');

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
