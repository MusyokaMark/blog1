import express, { response } from "express";
import { PORT, mongodbURL } from "./config.js";
import { request } from "http";
import mongoose from "mongoose";
import { Post } from './models/blogModel.js';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to my MERN blog')
});

//Route for save a new post
app.post('/posts', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.description ||
            !request.body.likes ||
            !request.body.comments 
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, description',
            });
        }
        const newPost = {
            title: request.body.title,
            description: request.body.description,
            likes: request.body.likes,
            comments: request.body.comments,
        };
        const post = await Post.create(newPost);
        return response.status(201).send(post);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
});

//Route for Get all Posts from the database
app.get('/posts', async (request, response) => {
    try {
        const posts = await Post.find({});

        return response.status(200).json(posts);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

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