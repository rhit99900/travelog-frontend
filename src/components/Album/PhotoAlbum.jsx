import React from 'react'
import { IonCard, IonButton, IonCardSubtitle, IonChip, IonCol } from '@ionic/react'

const PhotoAlbum = ({album}) => {

  const exploreAlbum = () => {

  }

  return (
    <IonCol size="4" className="imageCardWrapper">
      <IonCard className="imageCard">
        <div className="imageContainer">
          <img src={album.coverPhotoBaseUrl} />
        </div>
        <p>{album.title}</p>
        <IonChip>{album.mediaItemsCount}</IonChip>
      </IonCard>
    </IonCol>    
  )
}

export default PhotoAlbum;