require('dotenv').config();
const oracledb = require('oracledb');

async function getConnection() {
  try {
    return await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });
  } catch (err) {
    console.error('Erro ao conectar no Oracle:', err);
  }
}

module.exports = { getConnection };
