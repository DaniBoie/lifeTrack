const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class workoutDate extends Model { }

workoutDate.init({
  date: { type: DataTypes.DATEONLY, allowNull: false }
}, { sequelize, modelName: 'workout_date' })

module.exports = workoutDate