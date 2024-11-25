import { Schema, model } from "mongoose";

const userShema = new Schema({
    _id: string,
    tel: string,
    email: string,
    username: string,
    password: string,
    __v: number,
})

const User = model('User',userShema)

export default User