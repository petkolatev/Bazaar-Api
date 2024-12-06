import Book from '../models/Book.js'

const bookService = {
    async get() {
        return Book.find()
    },
    async getById(bookId) {
        return Book.findById(bookId)
    },
    async create({ title, author, genre, year, description, image, owner } ) {
        return Book.create({ title, author, genre, year, description, image, owner })
    },
    async update(id, update,) {
        return Book.findByIdAndUpdate(id, { ...update}, {new: true})
    },
    async remove(bookId) {
     console.log(bookId);
        return  await Book.findOneAndDelete({'_id':bookId})
    }
}

export default bookService
