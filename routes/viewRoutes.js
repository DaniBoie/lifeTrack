const router = require('express').Router()
const { join } = require('path')

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

router.get('/grid', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'grid.html'))
})

router.get('/diary', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'diary.html'))
})

module.exports = router