const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "10.110.248.73",
    database: "postgres",
    password: "password",
    port: "5432"
});

module.exports = pool;