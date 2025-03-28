const getConnection = require('../database/oracleConnection');

class NewModelOracle {
    static async getData() {
        let connection;
        try {
            connection = await getConnection();
            const result = await connection.execute('SELECT * FROM new_table');
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

    static async saveData(column1, column2) {
        let connection;
        try {
            connection = await getConnection();
            const result = await connection.execute(
                `INSERT INTO new_table (column1, column2) VALUES (:column1, :column2)`,
                { column1, column2 },
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

module.exports = NewModelOracle;
