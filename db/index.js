const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:-Fisher3385-@localhost/lifetrack_db')
