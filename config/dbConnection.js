const { createPool } = require('mysql2/promise')
const { HOST, USER, PASSWORD, DATABASE } = require('./config')

const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})

module.exports = pool
