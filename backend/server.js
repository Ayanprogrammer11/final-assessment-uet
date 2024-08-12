const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const userPostRoutes = require('./routes/userPosts');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/userposts', userPostRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));