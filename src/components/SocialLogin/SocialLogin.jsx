import React, { useState } from 'react'
import {IonRow, IonCol, IonModal, IonButton} from '@ionic/react'
import { useGoogleLogin } from 'react-google-login'
import { Login, FacebookProvider } from 'react-facebook'

import './SocialLogin.css'

import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from '../../utils/Constants' 

const SocialLogin = () => {

  const [ authorised, setAuthorised ] = useState(false);
  const [ loggedInUser, setLoggedInUser ] = useState({})

  const success = (response) => {    
    if(response.hasOwnProperty('googleId')){
      setLoggedInUser({
        email: response.profileObj.email ? response.profileObj.email: null,
        name: response.profileObj.name ? response.profileObj.name: null,
        profile_image: response.profileObj.imageUrl ? response.profileObj.imageUrl : null        
      })
    }
    else if(response.hasOwnProperty('profile')){
      setLoggedInUser({
        email: response.profile.email ? response.profile.email: null,
        name: response.profile.name ? response.profile.name: null,
        profile_image: response.profile.picture.data.url ? response.profile.picture.data.url : null        
      })
    }
    else{
      // TODO: Write something
    }
  }

  const failure = (response) => {
    console.log(response)
  }

  const { signIn, loading } = useGoogleLogin({
    onSuccess: success,
    onFailure: failure,
    clientId: GOOGLE_CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
    cookiePolicy: 'single_host_origin'
  });

  const initiateGoogleLogin = () => {
    signIn();
  }

  return(
    <div className="socialLogin">
      <p>-Or-</p>
      <IonRow className="socialLoginContainer">      
        <IonCol size="6">          
          <FacebookProvider appId={FACEBOOK_APP_ID}>
            <Login
              scope="email"
              onCompleted={success}
              onError={failure}
            >
              {({loading, handleClick, error, data}) => (
                <img name="facebook" onClick={handleClick} src="/assets/icon/facebook.svg" />
              )}              
            </Login>
          </FacebookProvider>
        </IonCol>
        <IonCol size="6">          
          <img name="google" onClick={initiateGoogleLogin} src="/assets/icon/google-plus.svg" />                 
        </IonCol>
      </IonRow>
      <IonModal isOpen={authorised} mode="md" className="light">
        <p>Enter your username</p>
        <IonButton>Create your account</IonButton>        
      </IonModal>
    </div>
  )
}

export default SocialLogin;