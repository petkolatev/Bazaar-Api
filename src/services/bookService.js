import { Router } from 'express'
import Book from '../models/Book.js'

const bookService = {
    async getBooks(req, res) {
        const books = await Book.find()

        res.json(books)
    },
    async getOneBooks(req, res) {
        const { bookId } = req.params


        return await Book.findById(bookId).then(book => res.json(book))

    },
    async createBook(req, res) {
        const { title, author, genre, year, description, image } = req.body

        return await Book.create({ title, author, genre, year, description, image })
            .then(book => res.json(book))
    }

}


export default bookService