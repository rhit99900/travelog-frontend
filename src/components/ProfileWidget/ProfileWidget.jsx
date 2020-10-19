import { IonButton, IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react'
import React from 'react'

import './ProfileWidget.css'

const ProfileWidget = ({user}) => {

  return (
    <IonCard>
      <IonCardContent>
        <IonRow className="profileHeader">
          <IonCol size="4">

          </IonCol>
          <IonCol size="8">
            <h1>{user.name}</h1>
            <h4>{user.username}</h4>
          </IonCol>
        </IonRow>
        <IonRow className="photoHolder">
          <IonCol size="4"></IonCol>
        </IonRow>
        <IonButton className="primaryButtonPink" expand="block">Follow</IonButton>
      </IonCardContent>
    </IonCard>
  )
}

export default ProfileWidget;