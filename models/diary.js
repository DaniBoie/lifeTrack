const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Diary extends Model { }

Diary.init({
  entry: { type: DataTypes.TEXT , allowNull: false },
}, { sequelize, modelName: 'diary' })

module.exports = Diary