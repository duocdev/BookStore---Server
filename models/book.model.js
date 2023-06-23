const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: String,
    description: String,
    price: Number,
    rating: Number,
    pages: Number,
    votes: Number,
    image: String,
    language: String,
    year: Number,
    publisher: String,
    category: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Book', BookSchema);