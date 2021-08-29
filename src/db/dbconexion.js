const {Pool} = require('pg');

const pool = new Pool({
    host: 'ec2-54-156-151-232.compute-1.amazonaws.com',
    port: '5432',
    user: 'fjrleopowsdhjy',
    password: '0e3bf7c4436ad5f02d6cda73d72b65415fc5d69efca13eb09ca9b78dba6492ea',
    database: 'd9p106qnu8l6he',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;