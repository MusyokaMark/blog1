import express, { response } from "express";
import { PORT, mongodbURL } from "./config.js";
import { request } from "http";
import mongoose from "mongoose";
import { Post } from './models/blogModel.js';
import postsRoutes from "./routes/postsRoutes.js";

const app = express();

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