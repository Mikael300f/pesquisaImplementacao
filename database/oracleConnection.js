require('dotenv').config();
const oracledb = require('oracledb');

async function getConnection() {
    try {
        const connection = await oracledb.getConnection({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECTION_STRING
        });
        console.log("Conexão com o Oracle bem-sucedida!");
        return connection;
    } catch (err) {
        console.error("Erro ao conectar no Oracle:", err);
        throw err;
    }
}

module.exports = getConnection;
