import React, {useState, useEffect, useMemo, useContext, memo} from 'react'

import { IonIcon, IonAvatar, IonTabBar, IonTabButton, IonRouterOutlet, IonTabs, IonTab, IonChip } from '@ionic/react';
import { BrowserRouter as Router, Route, Redirect, Switch, useHistory } from 'react-router-dom'

import { searchOutline, heartOutline, addCircleOutline, compassOutline } from 'ionicons/icons';
import Routes from '../../Routes'

import './Navigation.css'
import { UserContext } from '../../contexts/UserContext'

import Login from '../../pages/Login'
import Register from '../../pages/Register'
import SplashScreen from '../../pages/SplashScreen'

const RouterOutlet = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Routes />
    </IonRouterOutlet>      
    <IonTabBar slot="bottom" className="navigation">
      <IonTabButton tab="explore" href="/explore">
        <IonIcon icon={compassOutline} />            
      </IonTabButton>
      <IonTabButton tab="saved" href="/saved">
        <IonIcon icon={heartOutline} />            
      </IonTabButton>
      <IonTabButton tab="new" href="/new">
        <IonIcon className="createTrigger" icon={addCircleOutline} />            
      </IonTabButton>
      <IonTabButton tab="search" href="/search">
        <IonIcon icon={searchOutline} />            
      </IonTabButton>
      <IonTabButton tab="profile" href="/profile">
        <IonChip className="tabNavigationProfileAvatar">
          <IonAvatar className="hasStories">
            <img src="https://picsum.photos/id/237/20/20" />
          </IonAvatar>
        </IonChip>
      </IonTabButton>
    </IonTabBar>      
  </IonTabs>
)

const InitialRoute = memo(({path, exact, component}) => {
  const { thisUser } = useContext(UserContext);      

  if(thisUser && (path === '/' || path === '/login' || path === '/register')){
    return <Redirect to='/explore' />
  }
  else{
    return <Route path={path} exact={exact} component={component} />
  }
})

const Navigation = () => {  

  return(
    <Router>      
      <Switch>
        <InitialRoute path="/" exact={true} component={SplashScreen} />
        <InitialRoute path="/login" exact={true} component={Login} />
        <InitialRoute path="/register" exact={true} component={Register} />
        <Route> 
          <RouterOutlet />         
        </Route>
      </Switch>
    </Router>
  )
}

export default Navigation;