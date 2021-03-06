const router = require('express').Router()

router.use('/api', require('./diaryRoutes.js'))
router.use('/api', require('./scheduleRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./workoutRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router