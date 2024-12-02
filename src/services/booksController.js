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

    }

}


export default bookService