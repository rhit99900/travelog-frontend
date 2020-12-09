import React, {useState, useEffect, useContext} from 'react'
import {IonItem, IonInput, IonButton, IonIcon, IonPage, IonContent} from '@ionic/react'

import { useHistory } from 'react-router-dom'

import { arrowForwardOutline } from 'ionicons/icons'
import '../SplashScreen/Splash.css'

import '../../components/SocialLogin'
import SocialLogin from '../../components/SocialLogin'
import { UserContext } from '../../contexts/UserContext'
import Loading from '../../components/Loading'

import { styles } from '../../utils/styles'

const Login = () => {

  const [ loginDetails, setLoginDetails ] = useState({
    username: null,
    password: null,
  })

  const { authenticateUser, thisUser, loading } = useContext(UserContext);
  const history = useHistory()

  const updateField = e => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]:e.target.value
    })
  }

  const handleLogin = async e => {
    let logged_in = await authenticateUser(loginDetails);
    if(logged_in){
      history.push('/explore')
    }
  }
  
  const googleLogin = async e => {

  }

  if(loading){
    return (<Loading />)
  }


  return (
    <IonPage>
      <IonContent className="light splash" style={styles.splash}>
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
            <IonInput type="email" name="username" placeholder="Username" onIonChange={updateField}></IonInput>
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