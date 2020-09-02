const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Workout extends Model { }

Workout.init({
  name: { type: DataTypes.TEXT, allowNull: false },
  sets: { type: DataTypes.INTEGER, allowNull: false }, 
  reps: { type: DataTypes.INTEGER, allowNull: false }
}, { sequelize, modelName: 'workout' })

module.exports = Workout