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
import UserSearch from './pages/User/UserSearch'
import Itinerary from './pages/Itinerary'
import View from './pages/View'
import GooglePhotos from './pages/GooglePhotos'
import Gallery from './pages/Gallery'
import SubGallery from './pages/SubGallery'
import Maps from './pages/Maps'
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
      <Route path="/user-search" component={UserSearch} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/view" component={View} />
      <Route path="/callback" component={Explore} />
      <Route path="/import" component={GooglePhotos} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/subgallery" component={SubGallery} />
      <Route path="/maps" component={Maps} />
      <Route>
        <_404 />
      </Route>

    </Switch>
  </Router>
)

export default Routes;