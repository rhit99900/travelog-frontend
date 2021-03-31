import React from 'react'
import ReactDom from 'react-dom';
import { IonContent, IonCard, IonCardHeader, IonButton, IonCardContent, IonCardTitle, IonCardSubtitle, IonChip, IonRow, IonCol, IonGrid, IonIcon } from '@ionic/react'
import { arrowForwardSharp, train} from 'ionicons/icons';
import './OptionModal.css';


const OptionModal = ({open, onClose}) => {
  if (!open)  return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <div class="optionDiv">
          <IonGrid>
            <IonRow>
              <IonCol size="3"><IonIcon className="train" icon={train}></IonIcon></IonCol>
              <IonCol className="contentTxt" size="7">Write a new Travelog</IonCol>
              <IonCol className="directionIcon" size="2">  <IonIcon className="arrowForwardSharp" icon={arrowForwardSharp}></IonIcon></IonCol>        
            </IonRow>
          </IonGrid>
        </div>      
        <div class="optionDiv">
          <IonGrid>
            <IonRow>
              <IonCol size="3"><IonIcon className="train" icon={train}></IonIcon></IonCol>
              <IonCol className="contentTxt" size="7">Adding to an existing Travelog</IonCol>
              <IonCol className="directionIcon" size="2">  <IonIcon className="arrowForwardSharp" icon={arrowForwardSharp}></IonIcon></IonCol>        
            </IonRow>
          </IonGrid>
        </div>      
        <div class="optionDiv">
          <IonGrid>
            <IonRow>
              <IonCol size="3"><IonIcon className="train" icon={train}></IonIcon></IonCol>
              <IonCol className="contentTxt" size="7">Upload a solo post</IonCol>
              <IonCol className="directionIcon" size="2">  <IonIcon className="arrowForwardSharp" icon={arrowForwardSharp}></IonIcon></IonCol>        
            </IonRow>
          </IonGrid>
        </div>      
      </div>
    </>,
    document.getElementById('optionModalPortal')
  )
}

export default OptionModal;