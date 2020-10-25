import React, { useContext, useState } from 'react'
import { IonCard, IonCardContent, IonButton, IonCol, IonIcon } from '@ionic/react'
import { addCircle } from 'ionicons/icons'
import { Redirect, useHistory } from 'react-router-dom'

import { StorageContext } from '../../contexts/StorageContext'

const PhotoItem = ({photo}) => {

  const { uploadItem, setLoadedMedia } = useContext(StorageContext);
  const history = useHistory();   

  const uploadPhoto = async () => {     
    // const response = await uploadItem(photo);    
    // if(response){   
    setLoadedMedia(photo.baseUrl);
    history.push('/new');
    // }
  }

  return (
    <IonCol size="4" className="imageCardWrapper">
      <IonCard className="imageCard" onClick={uploadPhoto}>
        <div className="imageContainer">
          <img src={photo.baseUrl} />
        </div>
        <IonButton>{photo.filename}<IonIcon icon={addCircle} /></IonButton>
      </IonCard>
    </IonCol>
  )
}

export default PhotoItem;