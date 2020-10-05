import React, { useContext, useState } from 'react'
import { IonContent, IonPage, IonButton, IonInput, IonItem, IonIcon } from '@ionic/react'
import { arrowForwardOutline } from 'ionicons/icons'

import SocialLogin from '../../components/SocialLogin'
import { UserContext } from '../../contexts/UserContext'
// import { AuthContext } from '../../contexts/AuthContext'

import '../SplashScreen/Splash.css'

const Register = () => {

  const [ registerDetails, setRegisterDetails ] = useState({
    username: null,
    password: null,
    email: null
  })

  const { registerUser } = useContext(UserContext);  
  // const { setCurrentUser } = useContext(AuthContext);

  const updateField = e => {
    setRegisterDetails({
      ...registerDetails,
      [e.target.name]:e.target.value
    })
  }

  const handlerRegister = async () => {    
    let user = await registerUser(registerDetails);    
    console.log(user);
  }

  return (
    <IonPage>
      <IonContent className="light splash">
        <div className="loginImageContainer">
          <img src="/assets/graphics/splash-screen.svg" alt="Splash Screen Image"/>
          <h3>Travelog</h3>
          <p>Write your travel stories</p>
        </div>
        <div className="loginContainer">
          <IonItem className="loginElement">
            <IonInput type="text" name="username" placeholder="Username" onIonChange={updateField}></IonInput>
          </IonItem>
          <IonItem className="loginElement">
            <IonInput type="password" name="password" placeholder="Password" onIonChange={updateField}></IonInput>
          </IonItem>
          <IonItem className="loginElement">
            <IonInput type="email" name="email" placeholder="Email" onIonChange={updateField}></IonInput>
          </IonItem>          
          <IonButton className="primaryButton" onClick={handlerRegister} expand="block">
            Register
            <IonIcon slot="end" icon={arrowForwardOutline} />
          </IonButton>
          <SocialLogin />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Register