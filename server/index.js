import express, { response } from "express";
import { PORT, mongodbURL } from "./config.js";
import { request } from "http";
import mongoose from "mongoose";
import { Post } from './models/blogModel.js';
import postsRoutes from "./routes/postsRoutes.js";
import cors from 'cors';

const app = express();

//Option 1: Allow all origins with default of cors(*)
app.use(cors());

//Option 2: Allow Custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'PUT', 'POST', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
// })
// );

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to my MERN blog')
});



app.use('/posts', postsRoutes);

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });