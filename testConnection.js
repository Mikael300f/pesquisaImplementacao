const oracledb = require('oracledb');
require('dotenv').config();

// Configuração da conexão com o banco de dados Oracle
const connectionConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING
};

async function testConnection() {
  let connection;
  try {
    // Tentando conectar ao banco de dados
    connection = await oracledb.getConnection(connectionConfig);
    console.log('Conexão bem-sucedida com o Oracle!');
    
    // Testando a consulta
    const result = await connection.execute('SELECT * FROM users');
    console.log('Dados da tabela users:', result.rows);
  } catch (err) {
    console.error('Erro ao conectar ao Oracle:', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
      }
    }
  }
}

// Chama a função de teste
testConnection();
