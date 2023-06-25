const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, required: true, minlength: 3 },
    author: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true, min: 1 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    image: { type: String, required: true },
    description: { type: String, required: true, minlength: 10 },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Book', bookSchema, 'books')