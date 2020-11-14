import React from 'react'
import {  
  IonRow,
  IonCol,  
  IonGrid,
  IonIcon,
  IonLabel,  
  IonHeader
} from '@ionic/react'

import { searchOutline, personSharp, chatboxOutline, heartOutline, arrowBackOutline } from 'ionicons/icons'

const PostDetailsHeader = ({details}) => {
  return (
    <IonHeader>
      <IonGrid>
        <IonRow className="arrowBackIonRow">
          <IonCol>
            <IonIcon icon={arrowBackOutline} className="arrowBack margin-bottom" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='8'>
            <IonLabel>
              <h1 className="placeHeader">Paris, France</h1>    
              <h3 className="placeSubHeader"><IonIcon slot="end" icon={personSharp} /> Richard Parker</h3>    
            </IonLabel>
          </IonCol>
          <IonCol size="2" className="ion-margin-top">      
            <IonLabel >    
                <span className="commentTxt">256</span>  <IonIcon className="smallIcons" slot="end" icon={chatboxOutline}> 98</IonIcon>             
            </IonLabel>
          </IonCol>
          <IonCol size="2" className="ion-margin-top">
            <IonLabel>
                <span className="commentTxt">576</span>  <IonIcon className="smallIcons" slot="end" icon={heartOutline}> 98</IonIcon>             
            </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='4'>
            <IonLabel className="active">Photos</IonLabel>
          </IonCol>
          <IonCol size='4'>
            <IonLabel className="default">Places</IonLabel>
          </IonCol>
          <IonCol size='2'>
            <IonLabel className="default">...</IonLabel>
          </IonCol>
          <IonCol size="1">
            <IonIcon className="searchIcon" icon={searchOutline} />
          </IonCol>
        </IonRow>
      </IonGrid>  
    </IonHeader>
  )
}

export default PostDetailsHeader