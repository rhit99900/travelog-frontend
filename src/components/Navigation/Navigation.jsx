import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import {  
  IonIcon,
  IonAvatar,    
  IonTabButton,  
  IonChip
} from '@ionic/react';
import { searchOutline, heartOutline, addCircleOutline, compassOutline } from 'ionicons/icons';

const Navigation = () => {
  return (
    <>    
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
    </>
  )
}


export default Navigation;