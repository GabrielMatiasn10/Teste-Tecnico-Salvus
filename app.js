const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const produtoRoutes = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', produtoRoutes);

db.sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Erro ao sincronizar o banco de dados:', err.message);
  });
