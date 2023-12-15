import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">About Our Blog</h2>
        <p className="text-gray-700 mb-4">
          Our blog is a platform dedicated to sharing insightful articles and engaging content
          on various topics ranging from technology, lifestyle, travel, and more.
        </p>
        <p className="text-gray-700 mb-4">
          At our blog, we strive to provide valuable information and perspectives to our readers.
          Our team of passionate writers and contributors aims to create compelling and
          informative content for our audience.
        </p>
        <p className="text-gray-700 mb-4">
          This blog website is owned and managed by MalumaTech Company.
          We are committed to delivering high-quality content and an exceptional reading experience
          for our users.
        </p>
        <p className="text-gray-700">
          Thank you for visiting our blog and being a part of our community!
        </p>
      </div>
    </div>
  );
}

export default About;
