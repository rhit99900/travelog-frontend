import React from 'react'

import { IonPage, IonContent, IonIcon } from '@ionic/react'
import { bugOutline } from 'ionicons/icons'
import './404.css'

const _404 = () => {
  return (
    <IonPage>
      <IonContent className="light errorContainer">
        <h3>
          <IonIcon icon={bugOutline} /><br/>
          Page Not Found
        </h3>
      </IonContent>
    </IonPage>
  )
}

export default _404