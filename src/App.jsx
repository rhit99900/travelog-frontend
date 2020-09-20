import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonAvatar,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,  
  IonChip
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { searchOutline, heartOutline, addCircleOutline, compassOutline } from 'ionicons/icons';
import Explore from './pages/Explore';
import NewPost from './pages/NewPost';
import Search from './pages/Search';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './components/Navigation/Navigation.css'

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/explore" component={Explore} exact={true} />
          <Route path="/new" component={NewPost} exact={true} />
          <Route path="/search" component={Search} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="navigation">
          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={compassOutline} />            
          </IonTabButton>
          <IonTabButton tab="saved" href="/saved">
            <IonIcon icon={heartOutline} />            
          </IonTabButton>
          <IonTabButton tab="new" href="/new">
            <IonIcon icon={addCircleOutline} />            
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />            
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonChip className="tabNavigationProfileAvatar">
              <IonAvatar>
                <img src="https://picsum.photos/id/237/20/20" />
              </IonAvatar>
            </IonChip>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
