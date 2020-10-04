import React from 'react'
import {IonRow, IonCol} from '@ionic/react'

import './SocialLogin.css'

const SocialLogin = () => {
  return(
    <IonRow className="socialLoginContainer">
      <IonCol size="12">
        -Or
      </IonCol>
      <IonCol size="6">
        <img src="/assets/icon/facebook.svg" />
      </IonCol>
      <IonCol size="6">
      <img src="/assets/icon/google-plus.svg" />
      </IonCol>
    </IonRow>
  )
}

export default SocialLogin;