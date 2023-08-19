const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    _procedureId: {
        type: mongoose.Types.ObjectId,
        ref: 'Procedure'
    }

})

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})


const User = mongoose.model('User', userSchema)

module.exports = User