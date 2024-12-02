import { Router } from "express";
import bookService from "./services/booksController.js";
import authServise from './services/authService.js'
import authController from "./controllers/authCotroller.js";




const routes = Router();

routes.post('/register',authController)
routes.post('/login',authController)
routes.get('/logout',authController)

routes.get('/books', bookService.getBooks)
routes.get('/books/:bookId', bookService.getOneBooks)


export default routes