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

router.post('/', async (req, res) => {
    try {
        await furnitureService.create({
            ...req.body,
            _ownerId: req.user._id
        })

        res.status(201).end()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

router.get('/:furnitureId', async (req, res) => {
    try {
        const furniture = await furnitureService.getOne(req.params.furnitureId)
        res.json(furniture)
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

router.delete('/:furnitureId', async (req, res) => {
    try {
         await furnitureService.delete(req.params.furnitureId)
       res.status(204).end()
    } catch (err) {
        res.status(400).json({ error: error.message })
    }
})
module.exports = router