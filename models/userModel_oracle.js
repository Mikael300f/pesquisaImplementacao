const getConnection = require('../database/oracleConnection');

class UserModelOracle {
    static async getAllUsers() {
        let connection;
        try {
            connection = await getConnection();
            const result = await connection.execute('SELECT * FROM users');
            return result.rows;
        } catch (err) {
            console.error(err);
            return [];
        } finally {
            if (connection) {
                await connection.close();
            }
        }
    }

    static async createUser(name, email) {
        let connection;
        try {
            connection = await getConnection();
            const result = await connection.execute(
                `INSERT INTO users (name, email) VALUES (:name, :email)`,
                { name, email },
                { autoCommit: true }
            );
            return result;
        } catch (err) {
            console.error(err);
            return null;
        } finally {
            if (connection) {
                await connection.close();
            }
        }
    }
}

module.exports = UserModelOracle;
