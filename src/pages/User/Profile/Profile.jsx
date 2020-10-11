import React from 'react'

import { IonContent, IonPage, IonCard, IonCardContent, IonButton, IonInput, IonItem, IonIcon, IonText } from '@ionic/react'
import { arrowForwardOutline } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

import './Profile.css'

import ProfileStats from '../../../components/Profile/Stats'
import ProfileHighlights from '../../../components/Profile/Highlights'

const Profile = (user) => {

  return (
    <IonPage>
      <IonContent className="light">
        <div className="profileContainer">
          <IonCard className="profile">
            <div class="profileImage">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            </div>            
            <IonButton className="secondaryButton followButton">Follow</IonButton>
            <IonCardContent className="profileInfo">
              <h1>User Name</h1>
              <p>Lorem Ipsum Bio, Avid Traveller, Insane Human and other adjectives that may attract people to this profile</p>
              <ProfileStats />
              <ProfileHighlights />                 
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage> 
  )
}

export default Profile