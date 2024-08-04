/* eslint-disable react/prop-types */

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import EditPost from "./pages/EditPost.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import UserProfile from "./components/UserProfile.jsx";
import PostsList from "./components/PostsList.jsx";
import Navbar from "./components/Navbar.jsx";
import styles from "./App.module.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/dashboard" component={Dashboard} />

          <PrivateRoute path="/user-profile" component={UserProfile} />
          <PrivateRoute path="/dashboard" component={PostsList} />
          <PrivateRoute path="/create-post" component={CreatePost} />
          <PrivateRoute path="/edit-post/:id" component={EditPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
