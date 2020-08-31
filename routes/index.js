const router = require('express').Router()

router.use('/api', require('./diaryRoutes.js'))
router.use('/api', require('./scheduleRoutes.js'))

module.exports = router