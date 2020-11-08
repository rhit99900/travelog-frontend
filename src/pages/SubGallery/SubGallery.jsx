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
import './SubGallery.css'
import { searchOutline, personSharp, chatboxOutline, heartOutline, returnDownForward } from 'ionicons/icons'

const SubGallery = () => {
    return (
        <IonPage id="subGalleryPage">
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

      <IonItem className="verticalGalleryItem">
         <IonGrid className="galleryGrid">           
           
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item, index) => (      
               <IonRow>    
              <IonCol key={index}  size="4" className="slideBoxCol">
                    <img className="gpsImgTag" src="/assets/gps.svg"/>
               <img className="imageTag" src="https://picsum.photos/536/354"/>
               <IonLabel className="imgCaption">Le Grenier Pain</IonLabel>
                   <div className="roundIcon">
         {index} 
        </div>
              </IonCol>  
                  </IonRow>           
                ))}         
        
         
       </IonGrid>
      </IonItem>
       
      </IonContent>
    </IonPage>
    )
}

export default SubGallery;