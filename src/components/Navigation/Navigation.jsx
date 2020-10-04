import React, {useState, useEffect, useMemo} from 'react'
import {  
  IonIcon,
  IonAvatar,  
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonTabs,
  IonTab,  
  IonChip
} from '@ionic/react';

import { searchOutline, heartOutline, addCircleOutline, compassOutline } from 'ionicons/icons';
import Routes from '../../Routes'

import './Navigation.css'

const Navigation = () => {
  return(
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
  )
}

export default Navigation;