import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import CreatePost from './pages/CreatePost';
import PostDetail from './components/PostDetails';

function App({ posts }) {
  return (
    <Router>
      <div className=" text-black">
        <nav className="flex items-center justify-between px-2 py-3 bg-gray-800">
          <h1 className='text-green-400 text-4xl font-bold '>BLOG</h1>
        <div className="space-x-9">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/createpost" className="text-white hover:text-gray-300">Post</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" render={() => <PostDetail posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
