import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        thumbnail: '',
        likes: 0,
        comments: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/posts', formData);
            console.log('Post uploaded:', response.data);
            // Handle success: display a success message, redirect, etc.
        } catch (error) {
            console.error('Error uploading post:', error.response.data.message);
            // Handle error: display an error message to the user
        }
    };

    return (
        <div>
            <h2>Upload a New Post</h2>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        name="thumbnail"
                        onChange={handleChange}
                    />
                    {/* You can add more input fields for likes, comments, etc. */}
                    <button className='p-2 bg-sky-300 m-8' onClick={handleSubmit}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
