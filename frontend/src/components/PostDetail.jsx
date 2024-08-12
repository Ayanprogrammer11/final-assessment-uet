import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './PostDetail.module.css';

function PostDetail() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostAndComments = async () => {
      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(response.data.post);
      setComments(response.data.comments);
    };
    fetchPostAndComments();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.postDetailContainer}>
      <div className={styles.postContent}>
        <h1>{post.title}</h1>
        <p className={styles.author}>By: {post.author.username}</p>
        <p>{post.content}</p>
      </div>
      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {comments.map(comment => (
          <div key={comment._id} className={styles.commentItem}>
            <p>{comment.content}</p>
            <p className={styles.commentAuthor}>By: {comment.author.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetail;