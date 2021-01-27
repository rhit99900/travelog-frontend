import React, { useContext, useEffect, useState } from 'react'
import { IonRow, IonCol, IonModal, IonButton, IonInput, IonItem} from '@ionic/react'
import { useGoogleLogin } from 'react-google-login'
import { Login, FacebookProvider } from 'react-facebook'

import './SocialLogin.css'
import { UserContext } from '../../contexts/UserContext'

import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from '../../utils/Constants' 
import { Redirect, useHistory} from 'react-router'
import Helper from './../../utils/helper'

const SocialLogin = () => {

  const [ authorised, setAuthorised ] = useState(false);
  const [ loggedInUser, setLoggedInUser ] = useState({})
  const { socialLogin, thisUser, updateUser } = useContext(UserContext)
  const history = useHistory()


  const success = async (response) => {    
    await socialLogin(response);    
  }

  const failure = (response) => {
    console.log(response)
  }

  const { signIn, loading } = useGoogleLogin({    
    onSuccess: success,
    onFailure: failure,
    clientId: GOOGLE_CLIENT_ID,
    isSignedIn: false,
    accessType: 'offline',
    cookiePolicy: 'single_host_origin'
  });

  const initiateGoogleLogin = () => {
    signIn();
  }

  const setUserData = (e) => {    
    setLoggedInUser({ ...loggedInUser, username: e.target.value});
  }

  const updateThisUser = async () => {
    let user = await updateUser(loggedInUser);
  }

  useEffect(() => {    
    if(thisUser !== undefined && thisUser !== null){      
      if(Helper.isValidUser(thisUser)){
        if(thisUser.new_user){
          setAuthorised(true);
          setLoggedInUser(thisUser)
        }
        else{        
          setLoggedInUser(thisUser)
          history.push('/explore')
        }
      }
    }
  },[thisUser])

  useEffect(() => {
    console.log(authorised);
  },[authorised])

  return(
    <div className="socialLogin">
      <p>-Or-</p>
      { !authorised ? (
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
            <img name="google" onClick={() => initiateGoogleLogin()} src="/assets/icon/google-plus.svg" />                 
          </IonCol>
        </IonRow>
      ) : null }
      { authorised ? (
        <IonRow mode="md" className="light">
          <IonItem className="loginElement">
            <IonInput type="text" name="username" placeholder="Username" onIonChange={setUserData}></IonInput>
          </IonItem>
          <IonButton className="primaryButton" onClick={updateThisUser}>Create your account</IonButton>        
        </IonRow>
      ): null }
    </div>
  )
}

export default SocialLogin;