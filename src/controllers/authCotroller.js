import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js"

const authController = Router();
authController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body
console.log();
    try {
        const token = await authService.register(username, email, password, rePassword)

        res.cookie('auth', token, { httpOnly: true }).json(token)

    } catch (err) {
        const error = getErrorMessage(err)
        console.log(error);
    }
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const token = await authService.login(email, password)
      
        res.cookie('auth', token, { httpOnly: true }).json(token)
    } catch (err) {

        const error = getErrorMessage(err)

        res.json(error)
    }

})

authController.get('/logout', (req, res) => {
    res.clearCookie('auth')

    res.send({ message: 'Loged out' })
})


export default authController

