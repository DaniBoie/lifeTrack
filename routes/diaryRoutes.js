const router = require('express').Router()
const { Diary } = require('../models')

// GET all diary entries.
router.get('/diary', (req, res) => {
  Diary.findAll()
    .then(diary => res.json(diary))
    .catch(err => console.log(err))
})

// CREATE a diary entry
  router.post('/diary', (req, res) => {
    Diary.create(req.body)
    .then(diary => {
      res.json(diary)
    })
    .catch(err => console.log(err))
  })

// DELETE a diary entry
  router.delete('/diary/:id', (req,res) => {
    Diary.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
  })

module.exports = router