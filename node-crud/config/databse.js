const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "kushal",
    password: "kushal",
    database: "social"
});

module.exports = pool;
