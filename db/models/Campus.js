const db = require('../')

module.exports = db.define('campus', {
    name: db.Sequelize.STRING,
    image: db.Sequelize.STRING
})