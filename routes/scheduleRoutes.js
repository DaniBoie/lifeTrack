const { Schedule } = require('../models')
const router = require('express').Router()

router.get('/schedule', (req, res) => {
  Schedule.findAll()
    .then(schedule => res.json(schedule))
    .catch(err => console.log(err))
})

module.exports = router