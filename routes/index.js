const router = require('express').Router()

router.use('/api', require('./diaryRoutes.js'))
router.use('/api', require('./scheduleRoutes.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router