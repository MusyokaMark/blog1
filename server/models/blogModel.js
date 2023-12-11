import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        comments: {
            type: String,
            default: null,
        },
        likes: {
            type: Number,
            default: null,
        },
        thumbnail: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model('Post', blogSchema);