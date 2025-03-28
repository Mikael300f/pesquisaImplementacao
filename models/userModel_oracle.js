const oracledb = require('oracledb');
const { getConnection } = require('./database'); // Importa a função getConnection

// Função para obter todos os usuários da tabela "users"
const getUsers = async () => {
  let connection;
  try {
    connection = await getConnection();  // Usa a função de conexão externa
    const result = await connection.execute('SELECT * FROM users');
    return result.rows; // Retorna os dados dos usuários
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
      }
    }
  }
};

// Função para criar um novo usuário na tabela "users"
const createUser = async (name, email) => {
  let connection;
  try {
    connection = await getConnection(); // Usa a função de conexão externa
    const sql = `INSERT INTO users (name, email) VALUES (:name, :email)`;
    await connection.execute(sql, [name, email], { autoCommit: true });
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
      }
    }
  }
};

module.exports = { getUsers, createUser };
