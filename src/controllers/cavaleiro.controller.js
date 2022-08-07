// require service
const cavaleiroService = require('../services/cavaleiro.service');

// GetAll
const findAllCavaleirosController = (req, res) => {
  const allCavaleiros = cavaleiroService.findAllCavaleirosService();
  res.send(allCavaleiros);
};

// GetById
const findByIdCavaleiroController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenCavaleiro = cavaleiroService.findByIdCavaleiroService(idParam);
  res.send(chosenCavaleiro);
};

// Create
const createCavaleiroController = (req, res) => {
  const cavaleiro = req.body;
  const newCavaleiro = cavaleiroService.createCavaleiroService(cavaleiro);
  res.status(201).send(newCavaleiro);
};

const updateCavaleiroController = (req, res) => {
  const idParam = +req.params.id;
  const editCavaleiro = req.body;
  const updatedCavaleiro = cavaleiroService.updateCavaleiroService(
    idParam,
    editCavaleiro,
  );
  res.send(updatedCavaleiro);
};

//delete
const deleteCavaleiroController = (req, res) => {
  const idParam = req.params.id;
  cavaleiroService.deleteCavaleiroService(idParam);
  res.send({ message: 'Cavaleiro deletado com sucesso!' });
};

//exports functions
module.exports = {
  findAllCavaleirosController,
  findByIdCavaleiroController,
  createCavaleiroController,
  updateCavaleiroController,
  deleteCavaleiroController,
};
