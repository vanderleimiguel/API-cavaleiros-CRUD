// requires
const cavaleiroService = require('../services/cavaleiro.service');
const mongoose = require('mongoose');

// GetAll
const findAllCavaleirosController = async (req, res) => {
  const allCavaleiros = await cavaleiroService.findAllCavaleirosService();
  res.send(allCavaleiros);
};

// GetById
const findByIdCavaleiroController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCavaleiro = await cavaleiroService.findByIdCavaleiroService(
    idParam,
  );
  res.send(chosenCavaleiro);
};

// Create
const createCavaleiroController = async (req, res) => {
  const cavaleiro = req.body;
  const newCavaleiro = await cavaleiroService.createCavaleiroService(cavaleiro);
  res.status(201).send(newCavaleiro);
};

//update
const updateCavaleiroController = async (req, res) => {
  const idParam = req.params.id;
  const editCavaleiro = req.body;
  const updatedCavaleiro = await cavaleiroService.updateCavaleiroService(
    idParam,
    editCavaleiro,
  );
  res.send(updatedCavaleiro);
};

//delete
const deleteCavaleiroController = async (req, res) => {
  const idParam = req.params.id;
  await cavaleiroService.deleteCavaleiroService(idParam);
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
