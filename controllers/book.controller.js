const book = require('../models/book.model')
// 
const bookController = {getAllBooks, getBookById, addBook}

function getAllBooks(req, res) {
    book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err))
}

function getBookById(req, res) {
    book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err))
}

function addBook(req, res) {


    
    const newBook = new book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        pages: req.body.pages,
        votes: req.body.votes,
        image: req.body.image,
        language: req.body.language,
        year: req.body.year,
        publisher: req.body.publisher,
        category: req.body.category,
        comments: req.body.comments
    })

    newBook.save()
}

module.exports = bookController