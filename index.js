import mongoose from "mongoose";
import express from "express"
import cors from 'cors'
import config from "./config/config.js";
import apiRouter from './router/index.js'


try {
    await mongoose.connect('mongodb://localhost:27017/tasks')
    console.log('its connect');
} catch {

}
const app = express()
app.use(cors({
    origin: config.origin,
    credentials: true
}));


app.use('/api', apiRouter)

app.listen(config.port, () => console.log(`listening on ${config.port} `))