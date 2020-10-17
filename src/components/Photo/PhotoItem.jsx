import React from 'react'
import { IonCard, IonCardContent, IonCardSubtitle, IonCol } from '@ionic/react'

const PhotoItem = ({photo}) => {

  return (
    <IonCol size="4">
      <IonCard className="imageCard">
        <div className="imageContainer">
          <img src={photo.baseUrl} />
        </div>
        <IonCardContent>
          <IonCardSubtitle>
            {photo.name}
          </IonCardSubtitle>
        </IonCardContent>
      </IonCard>
    </IonCol>
  )
}

export default PhotoItem;