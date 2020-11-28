import React from 'react';
import { IonContent, IonPage } from '@ionic/react';


import Header from '../../components/Header'
import PostContainer from '../../components/PostContainer';


import './Explore.css';

const Explore = () => {
  return (
    <IonPage>    
      <IonContent fullscreen className="light">         
        <PostContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Explore;
