import { Router } from "express";
import bookService from "../services/booksController.js";

const router = Router()




router.get('/', bookService);
router.get('/:bookId', bookService);

export default router