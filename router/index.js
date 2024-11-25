import { Router } from "express";
import themes from '../router/themes.js'

const router = Router()

router.use('/tasks', themes);

export default router