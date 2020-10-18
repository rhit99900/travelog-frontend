import React, { useState } from 'react'
import { IonPage, IonButton, IonContent, IonGrid, IonRow, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { listPhotos, loadMore, listAlbums } from '../../utils/hooks/GoogleAPIAuth'

import PhotoItem from '../../components/Photo';
import PhotoAlbum from '../../components/Album';

import { imageOutline, imagesOutline } from 'ionicons/icons'

import './GooglePhotos.css';


const GooglePhotos = () => {

  const [ library, setLibrary ] = useState([]);
  const [ nextPage, setNextPage ] = useState(null);
  const [ selectedAlbumId, setSelectedAlbumId ] = useState(0);

  const [ selectedTab, setSelectedTab ] = useState('photos');

  const getPhotos = async () => {
    let data = await listPhotos();
    console.log(data);
    if(data && data.mediaItems) setLibrary(data.mediaItems);
    if(data.nextPageToken) setNextPage(data.nextPageToken);    
  }  

  const getAlbums = async () => {
    let data = await listAlbums();
    console.log(data);
    if(data && data.albums) setLibrary(data.albums);
    if(data.nextPageToken) setNextPage(data.nextPageToken);
  }

  const updateState = (data) => {
    if(data.mediaItems){
      setLibrary([...library, ...data.mediaItems]);
    }
    if(data.albums){
      setLibrary([...library,...data.albums]);
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
        <p></p>
        <IonSegment className="googlePhotoTab" onIonChange={e => setSelectedTab(e.detail.value)} mode="md" value={selectedTab}>
          <IonSegmentButton layout="icon-end" onClick={getPhotos} value="photos">
            Load Photos <IonIcon icon={imageOutline} />
          </IonSegmentButton>
          <IonSegmentButton layout="icon-end" onClick={getAlbums} value="albums">
            Load Albums <IonIcon icon={imagesOutline} />
          </IonSegmentButton>
        </IonSegment>
        
        {library.length !== 0 ? (
          <div className="googlePhotoGrid">
            <IonGrid>
              <IonRow>
              {library.map((item, i) => 
                {
                  if(selectedTab === 'photos'){
                    return(
                      <PhotoItem photo={item} key={i}></PhotoItem>                
                    )
                  }
                  else{
                    return (
                      <PhotoAlbum album={item} key={i}></PhotoAlbum>
                    )
                  }
                }
              )}
              </IonRow>
              <IonButton onClick={getMore}>More</IonButton>
            </IonGrid>
          </div>
        ): (
          <IonRow>
            <p>No Photos Here</p>
            <IonButton onClick={selectedTab === 'albums'? getAlbums : getPhotos }>
              Load {selectedTab === 'photos'? 'Photos': selectedTab === 'albums'? 'Albums' : 'Photos'} from Google Photos
            </IonButton>
          </IonRow>
        ) }
      </IonContent>
    </IonPage>
  )
}

export default GooglePhotos