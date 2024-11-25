import { Router } from "express";
import book from './books.js'

const router = Router()

router.use('/books', book);

export default router