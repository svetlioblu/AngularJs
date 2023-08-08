const mongoose = require('mongoose')

const procedureSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Procedure = mongoose.model('Procedure', procedureSchema)

module.exports = Furniture