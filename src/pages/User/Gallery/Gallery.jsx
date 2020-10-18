import React from 'react'

import { IonContent, 
         IonPage,     
         IonSegment, 
         IonSegmentButton, 
         IonRow, 
         IonCol, 
         IonInput, 
         IonGrid, 
         IonIcon, 
         IonLabel,
         IonItem } from '@ionic/react'
import './Gallery.css'
import { searchOutline, personSharp, chatboxOutline, heartOutline } from 'ionicons/icons'

const Gallery = () => {
   return (
    <IonPage>
      <IonContent className="light">       
         <IonItem lines="none" className="navigationMenu1" mode="md">  
         <IonLabel>
            <h1 className="placeHeader">Paris, France</h1>    
            <h3 className="placeSubHeader"><IonIcon slot="end" icon={personSharp} /> Richard Parker</h3>    
          </IonLabel>
          <IonLabel>
               <span className="commentTxt">256</span>  <IonIcon className="smallIcons" slot="end" icon={chatboxOutline}> 98</IonIcon>             
         &nbsp;
               <span className="commentTxt">576</span>  <IonIcon className="smallIcons" slot="end" icon={heartOutline}> 98</IonIcon>             
          </IonLabel>
         </IonItem>
        
          <IonItem lines="none" className="navigationMenu">               
            <IonIcon slot="end" className="searchIcon" icon={searchOutline} />
            <IonLabel className="active">Photos</IonLabel>
             <IonLabel className="default">Places</IonLabel>
             <IonLabel className="default">...</IonLabel>
          </IonItem>

           <IonItem lines="none">
           <IonGrid>
            <IonRow>    
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item, index) => (      
              <IonCol key={index}  size="4" className="interestBox">
               <img src="https://picsum.photos/536/354"/>
              </IonCol>             
                ))}         
            </IonRow>
          </IonGrid>  
        </IonItem>       
      </IonContent>
    </IonPage>
  )
}

export default Gallery;
