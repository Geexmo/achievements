const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "10.100.9.37",
    database: "postgres",
    password: "password",
    port: "5432"
});

module.exports = pool;