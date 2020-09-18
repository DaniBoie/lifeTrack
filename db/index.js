const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:Jamiekim87@localhost/lifetrack_db')
