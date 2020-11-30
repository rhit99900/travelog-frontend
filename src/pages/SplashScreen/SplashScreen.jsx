import React, { useState } from 'react'
import { IonContent, IonPage, IonButton, IonInput, IonItem, IonIcon, IonText } from '@ionic/react'
import { arrowForwardOutline } from 'ionicons/icons'
import { Link, useHistory } from 'react-router-dom'

import '../SplashScreen/Splash.css'

const Splash = () => {
  const history = useHistory();

  const handleNext = e => {    
    history.push('/register');
  }

  return (
    <IonPage>
      <IonContent className="light splash">
        <div className="splashImageContainer">
          <img src="/assets/graphics/splash-screen.svg" />          
          <h2>Travelog</h2>
          <p>Write your travel stories</p>
        </div>
        <div className="loginContainer">          
          <IonButton className="primaryButton" onClick={handleNext} expand="block">
            Get Started
            <IonIcon slot="end" icon={arrowForwardOutline} />
          </IonButton>
          <p>Already a user, login <Link to="/login">here</Link></p>
        </div>        
      </IonContent>
    </IonPage>
  )
}

export default Splash