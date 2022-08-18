// Requires
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/cavaleiro.route');
const connectToDataBase = require('./src/database/mongoDb/mongo');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./src/docs/swagger.json');

/////////////
const port = 3000;
const app = express();

connectToDataBase();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

////////////
app.use(express.json());
app.use(cors());
app.use('/cavaleiros', routes);

///////////
app.listen(process.env.PORT ?? port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
