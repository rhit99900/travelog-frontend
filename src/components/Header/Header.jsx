import React from 'react'
import {IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/react';

import { menuOutline,  searchOutline} from 'ionicons/icons';

import './Header.css';

const Header = () => {
  return(
    <IonHeader collapse="condense">
      <IonToolbar mode="md" className="light">
        <IonButtons slot="start">
          <IonButton>
            <IonIcon className="headerMenuIcon" icon={menuOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon className="headerMenuIcon" icon={searchOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>
          Travelog
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header;