import React, { useState } from 'react'
import { IonContent, IonPage, IonButton, IonInput, IonItem, IonIcon, IonText } from '@ionic/react'
import { arrowForwardOutline } from 'ionicons/icons'

import '../SplashScreen/Splash.css'

const Register = () => {

  const [ registerDetails, setRegisterDetails ] = useState({
    username: null,
    password: null,
    email: null
  })

  const updateField = e => {
    setRegisterDetails({
      ...registerDetails,
      [e.target.name]:e.target.value
    })
  }

  const handlerRegister = e => {
    console.log(registerDetails)
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
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Register