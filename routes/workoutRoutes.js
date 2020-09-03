const { Workout } = require('../models')
const { workoutDate } = require('../models')
const router = require('express').Router()

// GET all workout entries
router.get('/workout', (req, res) => {
  Workout.findAll()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// GET a specific day's workout
router.get('/workout/date/:id', (req, res) => {
  workoutDate.findOne({where : {id: req.params.id}, include: [Workout]})
  .then(workoutPlan => res.json(workoutPlan))
  .catch(err => console.log(err))
})

// CREATE a workout entry
router.post('/workout', (req, res) => {
  Workout.create(req.body)
    .then(entry => res.json(entry))
    .catch(err => console.log(err))
})

// CREATE a workout plan
router.post('/workout/date', (req,res) => {
  workoutDate.create(req.body)
  .then(date => res.json(date))
  .catch(err => console.log(err))
})

// Find all workout dates
router.get('/workout/date', (req, res) => {
  workoutDate.findAll({ include: [Workout]})
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// UPDATE a Workout entry
router.put('/workout/:id', (req, res) => {
  Workout.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE a Workout entry1
router.delete('/workout/:id', (req, res) => {
  Workout.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router