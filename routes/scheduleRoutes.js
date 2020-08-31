const router = require('express').Router()
const { Syrup } = require('../models')

router.get('/schedule', (req, res) => {
  Syrup.findAll()
    .then(schedule => res.json(schedule))
    .catch(err => console.log(err))
})

module.exports = router