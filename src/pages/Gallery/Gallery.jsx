import React, { useEffect, useState } from 'react'

import {
    IonContent,
    IonPage,    
    IonRow,
    IonCol,    
    IonGrid,    
} from '@ionic/react'
import './Gallery.css'

import PostDetailHeader from '../../components/PostDetailHeader'
import Gallery from '../../components/Gallery'

const GalleryPage = () => {

  return (
    <IonPage id="galleryPage">
      <IonContent className="light">
        <PostDetailHeader />
        <Gallery />
      </IonContent>
    </IonPage>
  )
}

export default GalleryPage;