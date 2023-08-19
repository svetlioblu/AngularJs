const router = require('express').Router()

const userService = require('../services/userService')

router.post('/register', async (req, res) => {
    const { email, password, firstName, lastName, age, tel } = req.body

    try {
        //todo will add _procedureId:
        const result = await userService.register({ ...req.body})
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/login', async (req, res) => {
    try {
        const result = await userService.login(req.body)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    }

})

router.get('/logout', (req, res) => {
    //TODO: Invalidate Token

    res.end()
})

module.exports = router