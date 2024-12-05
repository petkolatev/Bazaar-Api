import { Router } from "express"
import authService from "../services/authService.js"
import { getErrorMessage } from "../utils/errorUtils.js"

const userController = Router()
userController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body

    try {
        const token = await authService.register(username, email, password, rePassword)
        res.cookie('auth', token, { httpOnly: true }).json(token)

    } catch (err) {
        const error = getErrorMessage(err)
        res.status(500).send({ error })
    }
})

userController.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const token = await authService.login(email, password)
      
        res.cookie('auth', token, { httpOnly: true }).json(token)
    } catch (err) {
        const error = getErrorMessage(err)
        res.status(500).send({ error })
    }

})

userController.get('/logout', (req, res) => {
    res.clearCookie('auth')

    res.send({ message: 'Logged out' })
})


export default userController

