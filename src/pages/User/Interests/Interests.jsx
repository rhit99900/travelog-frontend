import React from 'react'

import { IonContent, IonPage, IonCard, IonCardContent, IonButton, IonRow, IonCol, IonInput, IonGrid, IonIcon, IonText } from '@ionic/react'
import './Interests.css'
import { arrowForwardOutline } from 'ionicons/icons'

import {USER_INTERESTS} from '../../../utils/Constants'

const UserInterests = () => {

  const interests = USER_INTERESTS;

  const addInterest = (e) => {
    e.target.classList.add('active');
  }

  const submitInterest = () => {

  }

  return (
    <IonPage>
      <IonContent className="light interest">
        <div className="loginImageContainer">                 
          <h3>Travelog</h3>
          <p>Select your travel interests</p>
        </div>
        <IonGrid>
          <IonRow>
            {interests.map((item, index) => (
              <IonCol key={index} size="4" className="interestBox">
                <div className="interests" value={item.name} onClick={addInterest}>
                  {item.name}
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonButton className="primaryButtonPink" onClick={submitInterest} expand="block">
          Continue
          <IonIcon slot="end" icon={arrowForwardOutline} />
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default UserInterests;
