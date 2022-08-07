// require mocks
const cavaleiros = require('../mocks/cavaleiros');

//GetAll
const findAllCavaleirosService = () => {
  return cavaleiros;
};

//GetById
const findByIdCavaleiroService = (parametroId) => {
  const oneCavaleiro = cavaleiros.find(
    (cavaleiro) => cavaleiro.id === parametroId,
  );
  return oneCavaleiro;
};

//Create
const createCavaleiroService = (newCavaleiro) => {
  const newId = cavaleiros.length + 1;
  newCavaleiro.id = newId;
  cavaleiros.push(newCavaleiro);
  return newCavaleiro;
};

//Update
const updateCavaleiroService = (id, cavaleiroEdited) => {
  cavaleiroEdited['id'] = id;
  const indexCavaleiro = cavaleiros.findIndex(
    (cavaleiro) => cavaleiro.id == id,
  );
  cavaleiros[indexCavaleiro] = cavaleiroEdited;
  return cavaleiroEdited;
};

//Delete
const deleteCavaleiroService = (id) => {
  const indexCavaleiro = cavaleiros.findIndex(
    (cavaleiro) => cavaleiro.id == id,
  );
  return cavaleiros.splice(indexCavaleiro, 1);
};

//exports functions
module.exports = {
  findAllCavaleirosService,
  findByIdCavaleiroService,
  createCavaleiroService,
  updateCavaleiroService,
  deleteCavaleiroService,
};
