require('dotenv').config();

const express = require('express');
const userRoutesOracle = require('./routes/userRoutes_oracle');

const app = express();

app.use(express.json());

app.use('/oracle', userRoutesOracle);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
