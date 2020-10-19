import React, { useState } from 'react'
import { IonContent, IonPage, IonCard, IonCardContent, IonButton, IonRow, IonCol, IonInput, IonGrid, IonIcon, IonText } from '@ionic/react'
import Back from '../../../components/Common/BackButton'

import ProfileWidget from '../../../components/ProfileWidget'
import ProfileHighlights from '../../../components/Profile/Highlights'

const UserSelectFollowing = () => {

  const [ users, setUsers ] = useState([
    {
      username: 'melgeorge',
      name: 'Mel George'
    }
  ]);


  return(
    <IonPage>      
      <IonContent className="light">
        <Back path='/interests' />
        <div className="loginImageContainer">                 
          <h3>Travelog</h3>
          <p>Find your travellers</p>
          <ProfileWidget user={users[0]}/>
        </div>
      </IonContent>      
    </IonPage>
  )
}

export default UserSelectFollowing;