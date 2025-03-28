const express = require('express');
const userRoutes = require('./controllers/userController'); // Importe as rotas
const app = express();
const port = 3000;

// Middleware para o Express entender JSON
app.use(express.json()); 

// Usar as rotas do controller
app.use('/api', userRoutes); 

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
