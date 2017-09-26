const db = require('../')

module.exports = db.define('student', {
    email: db.Sequelize.STRING,
    name: db.Sequelize.STRING
})