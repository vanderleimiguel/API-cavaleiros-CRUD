const route = require('express').Router();
const controllerCavaleiros = require('../controllers/cavaleiro.controller');

//Rotas

//GetAll
route.get(
  '/todos-cavaleiros',
  controllerCavaleiros.findAllCavaleirosController,
);
//GetById
route.get('/cavaleiro/:id', controllerCavaleiros.findByIdCavaleiroController);
// Create
route.post('/create', controllerCavaleiros.createCavaleiroController);
//Put
route.put('/update/:id', controllerCavaleiros.updateCavaleiroController);
//Delete
route.delete('/delete/:id', controllerCavaleiros.deleteCavaleiroController);

module.exports = route;
