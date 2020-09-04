const router = require('express').Router()
const { join } = require('path')

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

router.get('/diary', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'diary.html'))
})

router.get('/fitness', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'fitness.html'))
})

module.exports = router