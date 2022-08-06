const cavaleiroService = require('../services/cavaleiro.service');

// GetAll
const findAllCavaleirosController = (req, res) => {
  const Cavaleiros = cavaleiroService.findAllCavaleirosService();
  res.send(Cavaleiros);
};

// GetById
const findByIdCavaleiroController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaCavaleiro =
    cavaleiroService.findByIdCavaleiroService(parametroId);
  res.send(escolhaCavaleiro);
};

// Create
const createCavaleiroController = (req, res) => {
  const cavaleiro = req.body;
  const newCavaleiro = cavaleiroService.createCavaleiroService(cavaleiro);
  res.status(201).send(newCavaleiro);
};

const updateCavaleiroController = (req, res) => {
  const idParam = +req.params.id;
  const CavaleiroEdit = req.body;
  const updatedCavaleiro = cavaleiroService.updateCavaleiroService(
    idParam,
    CavaleiroEdit,
  );
  res.send(updatedCavaleiro);
};

const deleteCavaleiroController = (req, res) => {
  const idParam = req.params.id;
  cavaleiroService.deleteCavaleiroService(idParam);
  res.send({ message: 'Cavaleiro deletado com sucesso!' });
};

module.exports = {
  findAllCavaleirosController,
  findByIdCavaleiroController,
  createCavaleiroController,
  updateCavaleiroController,
  deleteCavaleiroController,
};
