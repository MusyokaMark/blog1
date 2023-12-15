// PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find(post => post._id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt={post.title} />
      <p>{post.description}</p>
    </div>
  );
};

export default PostDetail;
