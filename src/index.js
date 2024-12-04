import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import config from './services/dbConfig.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import 'dotenv/config'
import routes from './routes.js';

const app = express();

// setup DB
const url = 'mongodb://localhost:27017/books';
mongoose.connect(url)  // Change dbname with actual project name
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(`DB fail to connected: ${err}`))

app.use(cors({
    origin: config.origin,
    credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //we can read from body
// app.use(authMiddleware)
app.use('/api', routes)

app.listen(3000, () => console.log('Server is running on http:/localhost:3000 '));