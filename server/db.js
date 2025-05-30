const sql = require('mssql');

const config = {
    user: 'sa',  // tên tk sql
    password: '123', //mk sql
    server: 'MSI\\TTCS',
    port: 1433,
    database: 'QLClient', // tên database
    options: {
        trustServerCertificate: true,
    }
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

module.exports = {
    sql, pool, poolConnect
};
