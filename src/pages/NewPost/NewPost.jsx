import React, { useContext, useEffect, useState } from 'react';
import { IonCard, IonContent, IonCardContent, IonPage, IonItem, IonToolbar, IonInput, IonTextarea, IonLabel, IonButton } from '@ionic/react';

import { StorageContext } from '../../contexts/StorageContext';
import './NewPost.css';
import { Link } from 'react-router-dom';
import Editor from '../../components/ImageEditor'

const NewPost = () => {
  
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
        {isImported && media ? (
          <IonCard className="mediaWrapper" id="editorContainer">
            {/* <div className="newMediaContainer">
                <img src={media} />
            </div> */}
            <Editor image={media} />
            <IonCardContent>
              <IonItem mode="md" className="light inputBox">
                <IonLabel mode="md" position="stacked">Location</IonLabel>
                <IonInput mode="md" onIonChange={updateData} name="location"/>
              </IonItem>
              <IonItem mode="md" className="light inputBox">
                <IonLabel mode="md" position="stacked">Caption</IonLabel>
                <IonTextarea mode="md" onIonChange={updateData} name="caption"/>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ): (
          <Link to="/import">
            <IonButton className="secondaryButton">Import Photos from Google</IonButton>
          </Link>
        )}        
      </IonContent>
    </IonPage>
  );
};

export default NewPost;
