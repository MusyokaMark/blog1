import express from 'express';
import { Post } from "../models/blogModel.js"

const router = express.Router();


//Route for save a new post
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.likes ||
            !request.body.comments
        ) {
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
        response.status(500).send({ message: error.message });

    }
});

//Route for Get all Posts from the database
router.get('/', async (request, response) => {
    try {
        const posts = await Post.find({});

        return response.status(200).json(posts);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One post from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const post = await Post.findById(id);

        return response.status(200).json(post);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route for Update a post
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.likes ||
            !request.body.comments
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, description',
            });
        }

        const { id } = request.params;

        const result = await Post.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Post not found' });
        }

        return response.status(200).send({ message: 'Post updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a post
router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Post.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Post not found' });
      }
  
      return response.status(200).send({ message: 'Post deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default router;