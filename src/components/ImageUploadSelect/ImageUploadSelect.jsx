import { 
  IonCol, 
  IonGrid,  
  IonItem,  
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonButton
} from '@ionic/react'
import React from 'react'

import './ImageUploadSelect.css'

const ImpageUploadSelect = () => {

  return (
    <>
      <IonItem mode="md" className="new-post-title">
        Select Images to Upload
      </IonItem>
      <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
        <IonSegmentButton value="friends" className="post-selection-segment">
          <IonLabel>Gallery</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="enemies" className="post-selection-segment">
          <IonLabel>Google Photos</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonButton expand="full" className="upload-files-button">
        Upload Photos
      </IonButton>
    </>
  )
}


export default ImpageUploadSelect