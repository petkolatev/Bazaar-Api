import Book from '../models/book.js'

async function getBooks(req, res) {
    const books = await Book.find()

    res.json(books)
}

export default {
    getBooks
}