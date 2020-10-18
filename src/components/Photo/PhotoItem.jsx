import React from 'react'
import { IonCard, IonCardContent, IonButton, IonCol, IonIcon } from '@ionic/react'
import { addCircle } from 'ionicons/icons'

const PhotoItem = ({photo}) => {

  return (
    <IonCol size="4" className="imageCardWrapper">
      <IonCard className="imageCard">
        <div className="imageContainer">
          <img src={photo.baseUrl} />
        </div>
        <IonButton>{photo.filename}<IonIcon icon={addCircle} /></IonButton>
      </IonCard>
    </IonCol>
  )
}

export default PhotoItem;