const { Schedule } = require('../models')
const router = require('express').Router()

// GET all schedule entries
router.get('/schedule', (req, res) => {
  Schedule.findAll()
    .then(schedule => res.json(schedule))
    .catch(err => console.log(err))
})

// CREATE a schedule entry
router.post('/schedule', (req,res) => {
  Schedule.create(req.body)
  .then(entry => res.json(entry))
  .catch(err => console.log(err))
})

// UPDATE a schedule entry
router.put('/schedule/:id', (req,res) => {
  Schedule.update(req.body, {where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE a schedule entry
router.delete('/schedule/:id', (req,res) => {
  Schedule.destroy({where : {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router