import React, { memo } from 'react'
import {IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/react';

import { menuOutline,  searchOutline} from 'ionicons/icons';

import { menuController } from '@ionic/core';

import './Header.css';

const Header = () => {

  const openMenu = () => {
    console.log('Open Menu Called');
    menuController.enable(true,'onlyMenu');
    menuController.open('onlyMenu')
  }

  return(
    <IonHeader>
      <IonToolbar mode="md" className="light">
        <IonButtons slot="start" mode="md">
          <IonButton onClick={openMenu}>
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

export default memo(Header);