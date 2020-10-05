import React, {useState, useEffect, useContext} from 'react'
import {IonItem, IonInput, IonButton, IonIcon, IonPage, IonContent} from '@ionic/react'

import { arrowForwardOutline } from 'ionicons/icons'
import '../SplashScreen/Splash.css'

import '../../components/SocialLogin'
import SocialLogin from '../../components/SocialLogin'
import { UserContext } from '../../contexts/UserContext'

const Login = () => {

  const [ loginDetails, setLoginDetails ] = useState({
    // username: null,
    password: null,   
    email: null, 
  })

  const { authenticateUser, thisUser } = useContext(UserContext);

  const updateField = e => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]:e.target.value
    })
  }

  const handleLogin = async e => {
    let logged_in = await authenticateUser(loginDetails);
    if(logged_in){
      console.log(thisUser);
    }
  }

  return (
    <IonPage>
      <IonContent className="light splash">
        <div className="loginImageContainer">
          <img src="/assets/graphics/splash-screen.svg" />          
          <h3>Travelog</h3>
          <p>Write your travel stories</p>
        </div>
        <div className="loginContainer">
          {/* <IonItem className="loginElement">
            <IonInput type="text" name="username" placeholder="Username" onIonChange={updateField}></IonInput>
          </IonItem> */}
          <IonItem className="loginElement">
            <IonInput type="email" name="email" placeholder="Email" onIonChange={updateField}></IonInput>
          </IonItem>
          <IonItem className="loginElement">
            <IonInput type="password" name="password" placeholder="Password" onIonChange={updateField}></IonInput>
          </IonItem>          
          <IonButton className="primaryButton" onClick={handleLogin} expand="block">
            Login
            <IonIcon slot="end" icon={arrowForwardOutline} />
          </IonButton>
          <SocialLogin />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login;