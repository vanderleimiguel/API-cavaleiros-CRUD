// Requires
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/cavaleiro.route');
const connectToDataBase = require('./src/database/mongoDb/mongo');

/////////////
const port = 3000;
const app = express();

connectToDataBase();

////////////
app.use(express.json());
app.use(cors());
app.use('/cavaleiros', routes);

///////////
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
