import React, { memo } from 'react'

import { IonPage, IonContent, IonIcon } from '@ionic/react'
import { refreshCircleOutline } from 'ionicons/icons'

import './Loading.css'

const Loading = () => (  
  <IonPage>
    <IonContent className="light loaderContainer">
      <IonIcon icon={refreshCircleOutline} className="loaderIcon"/>
    </IonContent>
  </IonPage>
)

export default memo(Loading);