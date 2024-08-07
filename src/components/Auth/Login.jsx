// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForumList from './components/Forum/ForumList';
import PostDetails from './components/Forum/PostDetails';
import CreatePost from './components/Forum/CreatePost';
import UserDashboard from './components/Dashboard/UserDashboard';
import Profile from './components/Dashboard/Profile';
import { AuthProvider } from './contexts/AuthContext';

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={ForumList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forum" component={ForumList} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/create" component={CreatePost} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
