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

const Routes = () => (
  <Router>
    <Route path="/login" component={Login} exact={true} />
    <Route path="/explore" component={Explore} exact={true} />    
    <Route path="/new" component={NewPost} exact={true} />
    <Route path="/search" component={Search} />        
    <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} ></Route>      
  </Router>
)

export default Routes;