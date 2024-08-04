import React, { useContext } from 'react'; import { 
BrowserRouter as Router, Route, Switch } from 
'react-router-dom'; import { AuthProvider, 
AuthContext } from './context/AuthContext'; import 
Navbar from './components/Navbar'; import Home from 
'./pages/Home'; import Login from './pages/Login'; 
import Register from './pages/Register'; import 
Profile from './pages/Profile'; import PostDetails 
from './pages/PostDetails'; import CreatePost from 
'./pages/CreatePost'; import EditPost from 
'./pages/EditPost'; const PrivateRoute = ({ 
component: Component, ...rest }) => {
  const { user } = useContext(AuthContext); return ( 
    <Route
      {...rest} render={props => user ? <Component 
      {...props} /> : <Redirect to="/login" />}
    /> );
};
function App() { return ( <AuthProvider> <Router> 
        <Navbar /> <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/login" component={Login} /> 
          <Route path="/register" 
          component={Register} /> <PrivateRoute 
          path="/profile" component={Profile} /> 
          <PrivateRoute path="/post/create" 
          component={CreatePost} /> <PrivateRoute 
          path="/post/edit/:id" component={EditPost} 
          /> <Route path="/post/:id" 
          component={PostDetails} />
        </Switch> </Router> </AuthProvider> );
}
export default App;
