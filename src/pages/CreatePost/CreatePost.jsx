import React, { useContext, useEffect, useState } from 'react';
import { IonCard, IonContent, IonCardContent, IonPage, IonItem, IonToolbar, IonInput, IonTextarea, IonLabel, IonButton } from '@ionic/react';

import { StorageContext } from '../../contexts/StorageContext';
import './CreatePost.css';
import { Link } from 'react-router-dom';
import Editor from '../../components/ImageEditor'
import Header from '../../components/Header'
import ImageUploadSelect from '../../components/ImageUploadSelect'

const CreatePost = () => {
  
  const { loadedMedia } = useContext(StorageContext);
  
  // const [ media, setMedia ] = useState(null);
  // const [ isImported, setIsImported ] = useState(false);
  // Test Content Below
  const [ media, setMedia ] = useState("/assets/imgs/background.png");
  const [ isImported, setIsImported ] = useState(true);
  
  const updateData = (e) => {

  }

  useEffect(() => {    
    if(loadedMedia){      
      setIsImported(true);
      setMedia(loadedMedia)
    }
  }, [loadedMedia])

  return (
    <IonPage>      
      <IonContent fullscreen className="light">
        <Header/>
        <ImageUploadSelect />
      </IonContent>
    </IonPage>
  );
};

export default CreatePost;
