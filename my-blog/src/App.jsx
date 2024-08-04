/* eslint-disable react/prop-types */

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetails from "./pages/PostDetails";
import UserProfile from "./components/UserProfile";
import PostsList from "./components/PostsList";
import Navbar from "./components/Navbar";
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
