import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All'); // Default filter: All

  function truncateDescription(description) {
    const words = description.split(' ');
    if (words.length >= 10) {
      return words.slice(0, 10).join(' ') + '...';
    } else {
      return description;
    }
  }

  useEffect(() => {
    // Fetch posts from the server
    axios.get('http://localhost:8000/posts')
      .then(response => {
        setPosts(response.data); // Assuming the response contains an array of posts
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  // Filter posts based on search term and selected filter
  const filteredPosts = posts.filter(post => {
    return (
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
      (filter === 'All' || filter === 'Date' || filter === 'Most Viewed') // Add more conditions for other filters
    );
  });

  return (
    <div className="container mx-auto">
      {/* <h1 className="text-3xl font-bold mb-4">Blog Posts</h1> */}

      <div className="mb-4 flex items-center gap-3 p-3">
        <input
          type="text"
          placeholder="Search by post name..."
          className="border border-gray-300 px-3 py-2 rounded-md mr-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className={`px-4 py-2 rounded-md ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        {/* Add other filter buttons similarly */}
        <button
          className={`px-4 py-2 rounded-md ${filter === 'Date' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => setFilter('Date')}
        >
          Date
        </button>
        {/* <button
          className={`px-4 py-2 rounded-md ${filter === 'Most Viewed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => setFilter('Most Viewed')}
        >
          Most Viewed
        </button> */}
        {/* Add more buttons for other filters */}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPosts.map(post => (
            <Link to={`/posts/${post._id}`} key={post._id} className="bg-white p-4 shadow rounded">
              <img src={post.thumbnail} alt={post.title} />
              <h2 className="text-md font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">
                {truncateDescription(post.description)}
              </p>
            </Link>
            
          ))}
          
        </div>
      )}
    </div>
  );
};

export default Home;
