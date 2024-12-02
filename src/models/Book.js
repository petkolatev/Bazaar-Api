import { Schema, model,Types } from "mongoose";

const bookSchema = new Schema({
    id:{
        type:Number
    },
    title:{
        type:String,
    },
    author: {
        type:String,
    },
    genre: {
        type:String,
    },
    year: {
        type:Number,
    },
    description:{
        type:String,
    }
});

const Book = model('Book', bookSchema)

export default Book
