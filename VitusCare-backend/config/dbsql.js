const mysql = require("mysql2");

let pool;

function createPool() {
  pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "vitus_care",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed:", err.message);
      console.log("Retrying connection in 3 seconds...");
      setTimeout(createPool, 3000);
    } else {
      console.log("Connected to database.");
      connection.release();
    }
  });

  pool.on("error", (err) => {
    console.error("Database error:", err.message);
    if (
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "ECONNRESET" ||
      err.code === "ETIMEDOUT" ||
      err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"
    ) {
      console.log("Attempting to reconnect in 3 seconds...");
      setTimeout(createPool, 3000);
    } else {
      throw err;
    }
  });
}

createPool();

module.exports = pool.promise();
