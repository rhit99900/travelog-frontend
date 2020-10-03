import React, {useState, useEffect} from 'react'
import {IonCard, IonInput, IonCardHeader, IonCardContent} from '@ionic/react'

import './Login.css'

const Login = () => {
  return(
    <div className="loginContainer">
      <IonCard>
        <IonCardContent>
          <IonInput></IonInput>
        </IonCardContent>
      </IonCard>
    </div>
  )
}

export default Login;