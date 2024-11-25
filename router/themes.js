import { Router } from "express";
import  themeController  from "../controllers/themeController.js";

const router = Router()




router.get('/',themeController.getThemes);

export default router