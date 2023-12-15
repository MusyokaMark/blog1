import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdThumbUp, MdComment } from 'react-icons/md';

const LikeCommentIcons = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  useEffect(() => {
    // Fetch likes and comments count for a specific post
    axios.get(`http://localhost:8000/posts/${postId}/like-comment-count`)
      .then(response => {
        setLikes(response.data.likes);
        setComments(response.data.comments);
      })
      .catch(error => {
        console.error('Error fetching like/comment count:', error);
      });
  }, [postId]);

  return (
    <div className="flex items-center space-x-40 mt-8">
      <div className="flex items-center">
        <MdThumbUp />
        <span className="ml-1">{likes}</span>
      </div>
      <div className="flex items-center">
        <MdComment />
        <span className="ml-1">{comments}</span>
      </div>
    </div>
  );
};

export default LikeCommentIcons;
