import { Schema, model } from "mongoose";

const userShema = new Schema({
    firstName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String
    },
    id: {
        type: String
    },
})

const User = model('User', userShema)

export default User