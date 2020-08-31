const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Schedule extends Model { }

Schedule.init({
  entry: { type: DataTypes.STRING, allowNull: false },
  dateFor : {type: DataTypes.DATE, allowNull: false },
  urgency: { type: DataTypes.INTEGER, allowNull: false }
}, { sequelize, modelName: 'schedule' })

module.exports = Schedule