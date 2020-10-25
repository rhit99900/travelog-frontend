import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Explore from './pages/Feed/Explore'
import NewPost from './pages/NewPost'
import Search from './pages/Search'
import Profile from './pages/User/Profile'
import UserInterests from './pages/User/Interests'
import UserSelectFollowing from './pages/User/SelectFollowing'
import Itinerary from './pages/User/Itinerary'
import GooglePhotos from './pages/GooglePhotos'
import Gallery from './pages/User/Gallery'
import _404 from './pages/404'

const PrivateRoute = ({path, component, exact}) => {
  return (
    <Route path={path} component={component} exact={exact} />
  )
}

const Routes = () => (
  <Router>
    <Switch>      
      <PrivateRoute path="/explore" component={Explore} exact={true} />    
      <Route path="/new" component={NewPost} exact={true} />
      <Route path="/search" component={Search} />        
      <Route path="/profile" component={Profile} />
      <Route path="/interests" component={UserInterests} />
      <Route path="/select-following" component={UserSelectFollowing} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/callback" component={Explore} />
      <Route path="/import" component={GooglePhotos} />      
      <Route path="/gallery" component={Gallery} />      
      <Route>
        <_404 />
      </Route>

    </Switch>
  </Router>
)

export default Routes;