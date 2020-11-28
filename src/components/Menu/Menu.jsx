import React, { useContext, useEffect } from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonButton, IonIcon } from '@ionic/react'

import { logOutOutline } from 'ionicons/icons'
import './Menu.css'
import { UserContext } from '../../contexts/UserContext'
import { Redirect } from 'react-router'

const Menu = () => {

  const { unsetActiveUser } = useContext(UserContext)

  const logoutCurrentUser = () => {    
    if(unsetActiveUser()){
      return(
        <Redirect to="/" />
      )
    }
    else{
    }
  }
  
  return(  
    <IonMenu className="travelogMenu" side="end" swipeGesture="true" menuId="onlyMenu" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Travelog
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="menuContent" id="main">
        <IonList>
          <IonItem>
            Menu Item
          </IonItem>
          <IonItem>
            <IonButton onClick={logoutCurrentUser}>
              <IonIcon icon={logOutOutline}></IonIcon> Logout
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )

}

export default Menu