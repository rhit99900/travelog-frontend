import React, { useState, useEffect } from 'react'

import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonInput,
  IonGrid,
  IonIcon,
  IonLabel,
  IonItem,
  IonList,
  IonButton,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonDatetime

} from '@ionic/react';

import './Finalised.css'

import { arrowBackOutline, arrowForwardOutline, timerOutline} from 'ionicons/icons';

const Finalised = () => {
  
const [txtAreaValue, setTxtAreaValue] = useState("");
const [txtAreaCount, setTxtAreaCount] = useState(1);
const [durationVal, setDurationVal] = useState(1);
const maxTxtArea = 250;

  useEffect(() => {
    setTxtAreaCount(txtAreaValue.length);
  }, [txtAreaValue]);

  return (
    <IonPage id="finalisedPage">
      <IonContent className="light">

        <IonGrid>
          <IonRow className="arrowBackIonRow margin-top">
            <IonCol size="2">
              <IonIcon icon={arrowBackOutline} className="arrowBack margin-bottom" />
            </IonCol>
            <IonCol size="8">
            <IonLabel className="locationLabel" color="primary">Some Location...</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div class="galleryImageContainer">
          <img class="postImage" src="https://picsum.photos/536/354" />
        </div>

        <IonList lines="full" class="ion-no-margin">
        
          <IonItem lines="none">
            <IonGrid>
              <IonRow className="arrowBackIonRow margin-top">
                <IonCol size="6">             
                  <IonSelect className="daySelectorBox"  value="day1" interface="action-sheet">
                    <IonSelectOption value="day1">Day 1</IonSelectOption>
                    <IonSelectOption value="day2">Day 2</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol size="6">      
                 
                 <IonIcon className="timerIcon" icon={timerOutline} />
                  <IonDatetime displayFormat="HH:mm:ss" className="locationInput" display-timezone="utc"></IonDatetime>
                  <span item-right>
                 
                
                </span>     
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        
          <IonItem lines="none">
            <IonInput class="locationInput" placeholder="Travelog Location"></IonInput>
          </IonItem>
          <IonItem lines="none" className="ion-margin-top">
            <IonTextarea className="description" value={txtAreaValue} rows="10" maxlength={maxTxtArea} placeholder="Description" onIonInput={(e) => setTxtAreaValue(e.target.value)}></IonTextarea>
            <IonLabel className="ion-float-right countLabel">{txtAreaCount}/{maxTxtArea}</IonLabel>
          </IonItem>

        </IonList>
        
        <IonButton className="ion-float-right ion-margin-right nextBtn"  size="small" shape="round">UPLOAD <IonIcon icon={arrowForwardOutline} className="next-arrowForward margin-bottom" /></IonButton>


    
        {/*

          <IonItem lines="none">
            <IonLabel>Duration of Travel</IonLabel><br />    <br />
          </IonItem>

          <IonItem lines="none">
            <IonButton className="durationBtn" size="small" shape="round"><span onClick={(e) => (durationVal > 1)? setDurationVal( durationVal - 1): null} className="plus">-</span> <IonInput readonly className="counterInput" value={durationVal+ " Day"} placeholder="Travelog Location"></IonInput><span className="minus" onClick={(e) => (durationVal <= 30)? setDurationVal( durationVal + 1): ''}>+</span></IonButton>
          </IonItem>

          <IonItem lines="none" className="ion-margin-top">

 
            <IonTextarea className="description" value={txtAreaValue} rows="10" maxlength={maxTxtArea} placeholder="Description"  onIonInput={(e) =>  setTxtAreaValue(e.target.value)}></IonTextarea>
            <IonLabel className="ion-float-right countLabel">{txtAreaCount}/{maxTxtArea}</IonLabel>

          </IonItem>

          <IonButton className="ion-float-right ion-margin-right nextBtn"  size="small" shape="round">NEXT <IonIcon icon={arrowForwardOutline} className="next-arrowForward margin-bottom" /></IonButton>
        </IonList> */}
      </IonContent>
    </IonPage>
  )
}

export default Finalised;