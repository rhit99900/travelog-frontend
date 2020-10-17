import React from 'react'
import { IonCard, IonCardContent, IonCardSubtitle, IonChip, IonCol } from '@ionic/react'

const PhotoAlbum = ({album}) => {

  const exploreAlbum = () => {

  }

  return (
    <IonCol size="4">
      <IonCard className="imageContainer">
        <img src={album.coverPhotoBaseUrl} />
        <IonCardContent>
          <IonCardSubtitle>
            {album.title} <IonChip>{album.mediaItemsCount}</IonChip>
          </IonCardSubtitle>
        </IonCardContent>
      </IonCard>
    </IonCol>
  )
}

export default PhotoAlbum;