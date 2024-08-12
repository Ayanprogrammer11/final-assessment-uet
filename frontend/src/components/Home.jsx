import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>All Posts</h1>
      <div className={styles.postGrid}>
        {posts.map(post => (
          <div key={post._id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p>By: {post.author.username}</p>
            <Link to={`/post/${post._id}`} className={styles.readMoreLink}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;