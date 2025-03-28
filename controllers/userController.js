const express = require('express');
const { getUsers, createUser } = require('../models/userModel_oracle');
const router = express.Router();

// Rota GET para listar usuários
router.get('/users', async (req, res) => {
  try {
    const users = await getUsers(); // Chama a função para buscar os usuários
    res.json(users); // Retorna os dados dos usuários
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).send('Erro ao buscar usuários');
  }
});

// Rota POST para criar um novo usuário
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    await createUser(name, email); // Chama a função para criar o usuário
    res.json({ message: 'Usuário criado!' });
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).send('Erro ao criar usuário');
  }
});

module.exports = router;
