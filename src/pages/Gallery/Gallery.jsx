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
        <IonPage>
      <IonContent className="light">       
     <IonHeader>
    <IonGrid>
      <IonRow>
          <IonCol size='8'>
               <IonLabel>
                  <h1 class="placeHeader">Paris, France</h1>    
                  <h3 class="placeSubHeader"><IonIcon slot="end" icon={personSharp} /> Richard Parker</h3>    
                </IonLabel>
              </IonCol>

              <IonCol size="2">      
                <IonLabel>    
                   <span class="commentTxt">256</span>  <IonIcon class="smallIcons" slot="end" icon={chatboxOutline}> 98</IonIcon>             
               </IonLabel>
             </IonCol>

             <IonCol size="2" >
               <IonLabel>
                   <span class="commentTxt">576</span>  <IonIcon class="smallIcons" slot="end" icon={heartOutline}> 98</IonIcon>             
                </IonLabel>
              </IonCol>
            </IonRow>

        <IonRow>
          <IonCol size='4'>
            <IonLabel class="active">Photos</IonLabel>
          </IonCol>
        <IonCol size='4'>
             <IonLabel class="default">Places</IonLabel>
           </IonCol>
           <IonCol size='2'>
             <IonLabel class="default">...</IonLabel>
           </IonCol>
           <IonCol size="1">
             <IonIcon class="searchIcon" icon={searchOutline} />
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