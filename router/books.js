import { Router } from "express";
import booksController from "../controllers/booksController.js";

const router = Router()




router.get('/',booksController.getBooks);

export default router