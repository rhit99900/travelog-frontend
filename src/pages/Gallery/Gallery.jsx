import React from 'react'

import {
    IonContent,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonRow,
    IonCol,
    IonInput,
    IonGrid,
    IonIcon,
    IonLabel,
    IonItem,
    IonHeader
} from '@ionic/react'
import './Gallery.css'
import { searchOutline, personSharp, chatboxOutline, heartOutline } from 'ionicons/icons'

const Gallery = () => {
    return (
        <IonPage id="galleryPage">
      <IonContent className="light">       
     <IonHeader>
    <IonGrid>
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

         <IonGrid className="galleryGrid">           
            <IonRow>    
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item, index) => (      
              <IonCol key={index}  size="4" className="slideBoxCol">
               <img className="imageTag" src="https://picsum.photos/536/354"/>
              </IonCol>             
                ))}         
            </IonRow>
         
       </IonGrid>
       
      </IonContent>
    </IonPage>
    )
}

export default Gallery;