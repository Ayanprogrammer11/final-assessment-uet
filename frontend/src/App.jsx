import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import UserPosts from './components/UserPosts';
import PostDetail from './components/PostDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user/:id/posts" component={UserPosts} />
            <Route path="/post/:id" component={PostDetail} />
            <Route path="/" component={Home} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;