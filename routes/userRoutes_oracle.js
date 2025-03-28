const express = require('express');
const UserModelOracle = require('../models/userModel_oracle');
const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await UserModelOracle.getAllUsers();
    res.json(users);
});

router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const result = await UserModelOracle.createUser(name, email);
    res.json(result);
});

module.exports = router;