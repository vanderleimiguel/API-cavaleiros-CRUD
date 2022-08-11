// require mocks
const Cavaleiros = require('../database/models/cavaleirosSchema');
const cavaleiroEntity = require('../entities/cavaleiro.entity');

//GetAll
const findAllCavaleirosService = async () => {
  const allCavaleiros = await Cavaleiros.find();
  return allCavaleiros;
};

//GetById
const findByIdCavaleiroService = async (parametroId) => {
  const oneCavaleiro = await Cavaleiros.findById(parametroId);
  return oneCavaleiro;
};

//Create
const createCavaleiroService = async (cavaleiro) => {
  const newCavaleiro = new cavaleiroEntity(cavaleiro);
  newCavaleiro.validObjectBody();

  const newCavaleiroValidated = { ...newCavaleiro.getCavaleiro() };
  console.log(newCavaleiroValidated);

  const cavaleiroCreated = await Cavaleiros.create(newCavaleiroValidated);
  console.log(cavaleiroCreated);
  return cavaleiroCreated;
};

//Update
const updateCavaleiroService = async (id, cavaleiroEdited) => {
  const newCavaleiroEdited = new cavaleiroEntity(cavaleiroEdited);
  newCavaleiroEdited.validObjectBody();
  const newCavaleiroEditedValidated = { ...newCavaleiroEdited.getCavaleiro() };

  const updateCavaleiro = await Cavaleiros.findByIdAndUpdate(
    id,
    newCavaleiroEditedValidated,
  );

  return updateCavaleiro;
};

//Delete
const deleteCavaleiroService = async (id) => {
  return await Cavaleiros.findByIdAndDelete(id);
};

//exports functions
module.exports = {
  findAllCavaleirosService,
  findByIdCavaleiroService,
  createCavaleiroService,
  updateCavaleiroService,
  deleteCavaleiroService,
};
