import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from '../lib/jwt.js'

const authService = {
    async register(req, res, next) {
        const { username, email, password, rePassword } = req.body

        const user = await User.create({
            username,
            email,
            password,
        })
            .then(user => res.json(user))

    },
    async login(email, password) {
        const user = await User.findOne({ email })

        if (!user) {
            throw new Error('Invalid User or Password!')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            throw new Error('Invalid User or Password!')
        }

        const token =await  this.generateToken(user)
        return token
    },
    async generateToken(user) {
        const payload = {
            _id: user._id,
            email: user.email,
            username: user.username
        }
        const token = await jwt.sign(payload, '3', { expiresIn: '2h' })
       
        return token
    }

}


export default authService