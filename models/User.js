const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class User extends Model { }

User.init({
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING , allowNull: false },
  img_path: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName: 'user' })

module.exports = User