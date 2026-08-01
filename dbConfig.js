/**
 * GamePay - SQL Server Database Configuration
 * Configured for Faizan Ali
 */
module.exports = {
  user: process.env.DB_USER || 'Faizan',       // SQL Server username (Faizan)
  password: process.env.DB_PASSWORD || 'pmIK804', // SQL Server password
  server: process.env.DB_SERVER || 'localhost',  // SQL Server host (localhost or 127.0.0.1)
  database: process.env.DB_NAME || 'gamestore',  // Database name
  options: {
    encrypt: false,                              // Set to false for local dev
    trustServerCertificate: true,                // Trust the certificate (important for local dev)
    instanceName: process.env.DB_INSTANCE || 'SQLEXPRESS' // Named instance of SQL Server
  }
};
