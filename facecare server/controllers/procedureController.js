const router = require('express').Router()

const procedureService = require('../services/procedureService')

router.get('/', async (req, res) => {
    try {
        const procedures = await procedureService.getAll(req.query)

        res.status(200).json(procedures)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/add', async (req, res) => {
    try {
        console.log(req.body)
        await procedureService.create({
            ...req.body
            // ?add ownerId if needs
            // ,_ownerId: req.user._id
        })

        res.status(201).end()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

router.get('/:procedureId', async (req, res) => {
    try {
        console.log(req.params.procedureId);
        const procedure = await procedureService.getOne(req.params.procedureId)
        console.log(procedure);
        res.json(procedure)
    } catch (err) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/:furnitureId', async (req, res) => {
    try {
        const updatedFurniture = await furnitureService.update(req.params.furnitureId, req.body)
        res.status(204).end()
    } catch (err) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:procedureId', async (req, res) => {
    try {
         await procedureService.delete(req.params.procedureId)
       res.status(204).end()
    } catch (err) {
        res.status(400).json({ error: error.message })
    }
})


module.exports = router