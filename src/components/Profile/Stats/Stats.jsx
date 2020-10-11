import React from 'react'
import {IonRow, IonCol} from '@ionic/react'

import '../../../pages/User/Profile/Profile.css'

const ProfileStats = () => {

  return(
    <div className="profileInfoStats">
      <IonRow>
        <IonCol size="6" className="statsNumber">
          <h1>112</h1>
          <p>Trips</p>
        </IonCol>
        <IonCol size="6" className="statsNumber">
          <h1>110K</h1>
          <p>Followers</p>
        </IonCol>
      </IonRow>
    </div>
  )
}

export default ProfileStats;