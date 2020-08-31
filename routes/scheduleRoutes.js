const router = require('express').Router()
const { Schedule} = require('../models')

router.get('/schedule', (req, res) => {
  Sschedule.findAll()
    .then(schedule => res.json(schedule))
    .catch(err => console.log(err))
})

module.exports = router