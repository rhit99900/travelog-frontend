import React from 'react'
import {IonRow, IonCol} from '@ionic/react'

import './SocialLogin.css'

const SocialLogin = () => {

  const loginSocial = e => {    
    if(e.target.name === 'facebook'){
      initiateFacebookLogin();
    }
    else if(e.target.name === 'google'){
      initiateGoogleLogin();
    }
  }

  const initiateFacebookLogin = () => {
    // TODO: Do Something 
  }

  const initiateGoogleLogin = () => {
    // TODO: Do Something 
  }

  return(
    <div className="socialLogin">
      <p>-Or-</p>
      <IonRow className="socialLoginContainer">      
        <IonCol size="6">
          <img name="facebook" onClick={loginSocial} src="/assets/icon/facebook.svg" />
        </IonCol>
        <IonCol size="6">
          <img name="google" onClick={loginSocial} src="/assets/icon/google-plus.svg" />
        </IonCol>
      </IonRow>
    </div>
  )
}

export default SocialLogin;