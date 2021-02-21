import React, { useContext, useEffect, useState } from 'react'

import { IonContent, IonPage, IonCard, IonCardContent, IonButton, IonRow, IonCol, IonInput, IonItem, IonIcon, IonText, IonFab, IonFabButton, IonFabList } from '@ionic/react'
import { arrowForwardOutline, close, pencil, save } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

import './Profile.css'

import ProfileStats from '../../../components/Profile/Stats'
import ProfileHighlights from '../../../components/Profile/Highlights'
import Back from '../../../components/Common/BackButton'

import { UserContext } from '../../../contexts/UserContext'

const Profile = () => {

  const { thisUser, me } = useContext(UserContext);
  const [ edit, setEdit ] = useState(false);
  const [ userData, setUserData ] = useState({})

  useEffect(() => {
    if(!Object.keys(thisUser).length){
      me();
    }    
    else{
      setUserData(thisUser)
    }
  },[thisUser])

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const saveUserData = (e) => {
    
  }

  const closeEdit = (e) => {
    setUserData(thisUser)
    setEdit(false);
  }

  return (
    <IonPage>
      <Back path='interests' />
      <IonContent className="light">
        <div className="profileContainer">
        <IonRow>
          <IonCol size-xs="12" size-md="6">
            <IonCard className="profile">
              <div className="profileImage">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
              </div>
              <IonButton className="secondaryButton followButton following">Follow</IonButton>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCardContent className="profileInfo">
              {!edit ? (
                <>
                <h1>{thisUser.name}</h1>
                <h4>@{thisUser.username}</h4>
                <p>{thisUser.bio}</p>
                </>
              ): (
                <>
                <IonItem className="loginElement">
                  <IonInput name="name" onChange={handleChange} value={userData.name} placeholder="Name of Profile"></IonInput>
                </IonItem>
                <IonItem className="loginElement">
                  <IonInput name="username" onChange={handleChange} value={userData.username} placeholder="Username"></IonInput>
                </IonItem>
                <IonItem className="loginElement">
                  <IonInput name="bio" onChange={handleChange} value={userData.bio} placeholder="Profile Bio"></IonInput>
                </IonItem>
                </>
              )}
              
              <ProfileStats />
              <ProfileHighlights />
            </IonCardContent>
          </IonCol>          
        </IonRow>
        </div>
      </IonContent>      
        {!edit ? (
          <IonFab vertical="bottom" horizontal="end" mode="md" slot="fixes">
            <IonFabButton onClick={() => setEdit(true)}>
              <IonIcon icon={pencil}></IonIcon>
            </IonFabButton>
          </IonFab>
        ): (
          <>
          <IonFab vertical="bottom" horizontal="end" mode="md" slot="fixes">
            <IonFabButton onClick={() => closeEdit}>
              <IonIcon icon={save}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonFab vertical="bottom" horizontal="start" mode="md" slot="fixes">
            <IonFabButton onClick={() => saveUserData}>
              <IonIcon icon={close}></IonIcon>
            </IonFabButton>
          </IonFab>
          </>
        )}
              
    </IonPage> 
  )
}

export default Profile