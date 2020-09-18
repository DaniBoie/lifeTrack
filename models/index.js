const Diary = require('./diary.js')
const Schedule = require('./schedule.js')
const User = require('./User.js')
const Workout = require('./Workout')
const workoutDate = require('./workoutDate')

workoutDate.hasMany(Workout)
Workout.belongsTo(workoutDate)

module.exports = { Diary, Schedule, User, Workout, workoutDate}