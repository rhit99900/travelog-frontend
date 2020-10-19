import React, { useContext } from 'react'

import { IonContent, IonPage, IonCard, IonCardContent, IonButton, IonRow, IonCol, IonInput, IonItem, IonIcon, IonText } from '@ionic/react'
import { arrowForwardOutline } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

import './Profile.css'

import ProfileStats from '../../../components/Profile/Stats'
import ProfileHighlights from '../../../components/Profile/Highlights'
import Back from '../../../components/Common/BackButton'

import { UserContext } from '../../../contexts/UserContext'

const Profile = () => {

  const { thisUser } = useContext(UserContext);

  console.log(thisUser);


  return (
    <IonPage>
      <Back path='interests' />
      <IonContent className="light">
        <div className="profileContainer">
        <IonRow>
          <IonCol size-xs="12" size-md="6">
            <IonCard className="profile">
              <div className="profileImage">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
              </div>
              <IonButton className="secondaryButton followButton following">Follow</IonButton>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCardContent className="profileInfo">
              <h1>{thisUser.username}</h1>
              <h4>@{thisUser.username}</h4>
              <p>{thisUser.bio}</p>
              <ProfileStats />
              <ProfileHighlights />
            </IonCardContent>
          </IonCol>          
        </IonRow>
        </div>
      </IonContent>
    </IonPage> 
  )
}

export default Profile