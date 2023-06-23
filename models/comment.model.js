const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }
})

module.exports = mongoose.model('Comment', CommentSchema)