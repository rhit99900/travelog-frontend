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
import { searchOutline, personSharp, chatboxOutline, heartOutline, returnDownForward, arrowBackOutline } from 'ionicons/icons'

import PostDetailHeader from '../../components/PostDetailHeader'

const SubGallery = () => {
  return (
    <IonPage id="subGalleryPage">
      <IonContent className="light">       
        <PostDetailHeader />
          
        <IonItem className="verticalGalleryItem light">]
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