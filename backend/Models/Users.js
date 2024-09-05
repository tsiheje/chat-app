const DB = require('../DB/configDB');

const Users = {
    getAll: (callback) => {
        DB.query('SELECT * FROM users', callback)
    },

    create: (email, name, firstname, password, callback) => {
        DB.query('INSERT INTO users (email, name, firstname, password) VALUES (?, ?, ?, ?)', [email, name, firstname, password], callback)
    },

}

module.exports = Users;