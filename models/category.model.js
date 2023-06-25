const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: { type: String, required: true, minlength: 3 },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Category', categorySchema, 'categories')