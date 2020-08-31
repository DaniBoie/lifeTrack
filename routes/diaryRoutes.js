const router = require('express').Router()
const { Diary } = require('../models')

router.get('/diary', (req, res) => {
  Bean.findAll()
    .then(diary => res.json(diary))
    .catch(err => console.log(err))
})

module.exports = router