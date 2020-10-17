import React, { useState } from 'react'
import { IonPage, IonButton, IonContent, IonGrid, IonRow } from '@ionic/react';
import { listPhotos, loadMore, listAlbums } from '../../utils/hooks/GoogleAPIAuth'

import PhotoItem from '../../components/Photo';

import './GooglePhotos.css';

const GooglePhotos = () => {

  const [ library, setLibrary ] = useState([]);
  const [ nextPage, setNextPage ] = useState(null);
  const [ selectedAlbumId, setSelectedAlbumId ] = useState(0);

  const getPhotos = async () => {
    let data = await listPhotos();
    console.log(data);
    if(data) updateState(data);
  }

  const getAlbums = async () => {
    let data = await listAlbums();
    console.log(data);
  }

  const updateState = (data) => {
    if(data.mediaItems){
      setLibrary([...library, ...data.mediaItems]);
    }
    if(data.nextPageToken){
      setNextPage(data.nextPageToken);
    }
  }

  const getMore = async () => {
    if(nextPage !== null){
      let data = await loadMore(nextPage);
      if(data) updateState(data);
    }
  }


  return(
    <IonPage>
      <IonContent className="light">
        <IonButton mode="md" onClick={getPhotos}>Load Google Photos</IonButton>
        <IonButton mode="md" onClick={getAlbums}>Load Google Albums</IonButton>
        {library.length !== 0 ? (
          <div className="googlePhotoGrid">
            <IonGrid>
              <IonRow>
              {library.map((photo, i) => (                
                <PhotoItem photo={photo} key={i}></PhotoItem>                
              ))}
              </IonRow>
              <IonButton onClick={getMore}>More</IonButton>
            </IonGrid>
          </div>
        ): null }
      </IonContent>
    </IonPage>
  )
}

export default GooglePhotos