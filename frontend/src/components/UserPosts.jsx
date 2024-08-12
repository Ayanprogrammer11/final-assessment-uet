import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './UserPosts.module.css';

function UserPosts() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await axios.get(`http://localhost:5000/api/userposts/${id}`);
      setPosts(response.data);
    };
    fetchUserPosts();
  }, [id]);

  return (
    <div className={styles.userPostsContainer}>
      <h1>User Posts</h1>
      <div className={styles.postList}>
        {posts.map(post => (
          <div key={post._id} className={styles.postItem}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPosts;