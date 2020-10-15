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
import Profile from './pages/User/Profile'
import UserInterests from './pages/User/Interests'
import UserSelectFollowing from './pages/User/SelectFollowing'
import Itinerary from './pages/User/Itinerary'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/register" component={Register} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/explore" component={Explore} exact={true} />    
      <Route path="/new" component={NewPost} exact={true} />
      <Route path="/search" component={Search} />        
      <Route path="/profile" component={Profile} />
      <Route path="/interests" component={UserInterests} />
      <Route path="/select-following" component={UserSelectFollowing} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/" component={SplashScreen} exact={true} />
    </Switch>
  </Router>
)

export default Routes;