// src/components/Posts.jsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData('action');
      if (data) {
        setPosts(data);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
