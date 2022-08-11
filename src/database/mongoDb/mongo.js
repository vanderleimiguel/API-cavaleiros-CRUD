const mongoose = require('mongoose');

//conecção com banco de dados
const connectToDataBase = () => {
  //endereco do banco de dados
  mongoose
    .connect('mongodb://localhost:27017/cavaleiros-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //retorna uma promisse, esperar resultado, verificando se esta funcionando
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDataBase;