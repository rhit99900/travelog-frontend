import React, { useState, useEffect } from 'react'

import {
  IonContent,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonRow,
  IonCol,
  IonInput,
  IonGrid,
  IonIcon,
  IonLabel,
  IonItem,
  IonHeader,
  IonList,
  IonButton,
  IonTextarea

} from '@ionic/react';

import './Details.css'

import { arrowBackOutline, arrowForwardOutline} from 'ionicons/icons'

import PostDetailHeader from '../../components/PostDetailHeader'

const Details = () => {
  
const [txtAreaValue, setTxtAreaValue] = useState("");
const [txtAreaCount, setTxtAreaCount] = useState(1);
const [durationVal, setDurationVal] = useState(1);
const max = 250;

  useEffect(() => {
    setTxtAreaCount(txtAreaValue.length);
  }, [txtAreaValue]);

  return (
    <IonPage id="detailsPage">
      <IonContent className="light">

        <IonGrid>
          <IonRow className="arrowBackIonRow margin-top">
            <IonCol>
              <IonIcon icon={arrowBackOutline} className="arrowBack margin-bottom" />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList lines="full" class="ion-no-margin">
          <IonItem className="nameInput">
            <IonInput placeholder="Your Travelog Name.."></IonInput>
          </IonItem>

          <IonItem lines="none">
            <IonInput class="shadow-red" placeholder="Travelog Location"></IonInput>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>Duration of Travel</IonLabel><br />    <br />
          </IonItem>

          <IonItem lines="none">
            <IonButton className="durationBtn" size="small" shape="round"><span onClick={(e) => (durationVal > 1)? setDurationVal( durationVal - 1): null} className="plus">-</span> <IonInput readonly className="counterInput" value={durationVal+ " Day"} placeholder="Travelog Location"></IonInput><span className="minus" onClick={(e) => (durationVal <= 30)? setDurationVal( durationVal + 1): ''}>+</span></IonButton>
          </IonItem>

          <IonItem lines="none" className="ion-margin-top">

            {/* <IonLabel className="descriptionLabel">Description</IonLabel> */}
            <IonTextarea className="description" value={txtAreaValue} rows="10" maxlength={max} placeholder="Description"  onIonInput={(e) =>  setTxtAreaValue(e.target.value)}></IonTextarea>
            <IonLabel className="ion-float-right countLabel">{txtAreaCount}/{max}</IonLabel>

          </IonItem>

          <IonButton className="ion-float-right ion-margin-right nextBtn"  size="small" shape="round">NEXT <IonIcon icon={arrowForwardOutline} className="next-arrowForward margin-bottom" /></IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Details;