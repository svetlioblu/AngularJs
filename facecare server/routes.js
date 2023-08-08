const router = require('express').Router()
const userController = require('./controllers/userController')
const procedureController = require('./controllers/procedureController')

router.use('/users', userController)
router.use('/procedures', procedureController)



module.exports = router