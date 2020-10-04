import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Explore from './pages/Explore'
import NewPost from './pages/NewPost'
import Search from './pages/Search'
import Login from './pages/Login'
import Register from './pages/Register'
import SplashScreen from './pages/SplashScreen'

const Routes = () => (
  <Router>
    <Route path="/register" component={Register} exact={true} />
    <Route path="/login" component={Login} exact={true} />
    <Route path="/explore" component={Explore} exact={true} />    
    <Route path="/new" component={NewPost} exact={true} />
    <Route path="/search" component={Search} />        
    <Route path="/" component={SplashScreen} exact={true} ></Route>      
  </Router>
)

export default Routes;