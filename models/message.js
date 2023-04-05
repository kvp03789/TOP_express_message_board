const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    text: {
        required: true,
        type: String
    },
    user: {
        required: true,
        type: String
    },
    added: {
        type: String
    }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message