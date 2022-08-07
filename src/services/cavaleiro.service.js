// require mocks
const cavaleiros = require('../mocks/cavaleiros');
const cavaleiroEntity = require('../entities/cavaleiro.entity');

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
const createCavaleiroService = (cavaleiro) => {
  const newCavaleiro = new cavaleiroEntity(cavaleiro);
  newCavaleiro.validObjectBody();
  const newCavaleiroValidated = { ...newCavaleiro.getCavaleiro() };
  cavaleiros.push(newCavaleiroValidated);
  return newCavaleiroValidated;
};

//Update
const updateCavaleiroService = (id, cavaleiroEdited) => {
  const newCavaleiroEdited = new cavaleiroEntity(cavaleiroEdited);
  newCavaleiroEdited.validObjectBody();
  const newCavaleiroEditedValidated = { ...newCavaleiroEdited.getCavaleiro() };

  newCavaleiroEditedValidated['id'] = id;
  const indexCavaleiro = cavaleiros.findIndex(
    (newCavaleiroEditedValidated) => newCavaleiroEditedValidated.id == id,
  );
  cavaleiros[indexCavaleiro] = newCavaleiroEditedValidated;
  return newCavaleiroEditedValidated;
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
