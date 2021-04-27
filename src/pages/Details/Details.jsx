import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext'
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
import './Details.css';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

const Details = () => {
  const [txtAreaValue, setTxtAreaValue] = useState("");
  const [txtAreaCount, setTxtAreaCount] = useState(1);
  const [durationVal, setDurationVal] = useState(1);
  const { travelog } = useContext(UserContext)
  const maxTxtArea = 250;

  const [travelogData, setTravelogData] = useState({
    travelog_name: null,
    location: {},
    duration: 1,
    description: null
  });

  const [travelogDataError, setTravelogDataError] = useState({
    travelog_name: '',
    location: '',
    duration: '',
    description: ''
  });

  useEffect(() => {
    setTxtAreaCount(txtAreaValue.length);
  }, [txtAreaValue]);

  function validateFields() {
    console.log(travelogData);
  }

  function handleUserInput(event) {
    event.preventDefault();
    const { name, value } = event.target;

    let data = travelogData;
    let errors = travelogDataError;

    switch (name) {
      case 'travelog_name':
        errors.travelog_name =
          value.length < 5
            ? 'Your Travelog Name must be 5 characters long!'
            : '';
        data.travelog_name = value.trim();
        break;
      case 'location':
        data.location = {};
        break;
      case 'duration':
        data.duration = Number(value.match(/(\d+)/)[0]);
        break;
      case 'description':
        data.description = value.trim();
        break;
      default:
        break;
    }

    setTravelogData(data);
    setTravelogDataError(errors);
  }

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  const handleSubmit = async (event) => {
    let responseData = '';
    event.preventDefault();

    if (validateForm(travelogDataError)) {
      console.info('Valid Form');
      responseData = await travelog(travelogData);      
      console.log (responseData);
    } else {
      console.error('Invalid Form')
    }
  }

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
            <IonInput name="travelog_name" onIonChange={handleUserInput} placeholder="Your Travelog Name.."></IonInput>
          </IonItem>

          <IonItem lines="none">
            <IonInput name="location" class="shadow-red" onIonChange={handleUserInput} placeholder="Travelog Location"></IonInput>
          </IonItem>

          <IonItem lines="none">
            <IonLabel className="durationLabel">Duration of Travel</IonLabel><br />    <br />
          </IonItem>

          <IonItem lines="none">
            <IonButton className="durationBtn" size="small" shape="round"><span onClick={(e) => (durationVal > 1) ? setDurationVal(durationVal - 1) : null} className="plus">-</span> <IonInput readonly className="counterInput" name="duration" onIonChange={handleUserInput} value={durationVal + " Day"} placeholder="Travelog Location"></IonInput><span className="minus" onClick={(e) => (durationVal <= 30) ? setDurationVal(durationVal + 1) : ''}>+</span></IonButton>
          </IonItem>

          <IonItem lines="none" className="ion-margin-top">

            {/* <IonLabel className="descriptionLabel">Description</IonLabel> */}
            <IonTextarea name="description" onIonChange={handleUserInput} className="description" value={txtAreaValue} rows="10" maxlength={maxTxtArea} placeholder="Description" onIonInput={(e) => setTxtAreaValue(e.target.value)}></IonTextarea>
            <IonLabel className="ion-float-right countLabel">{txtAreaCount}/{maxTxtArea}</IonLabel>

          </IonItem>

          <IonButton className="ion-float-right ion-margin-right nextBtn" onClick={handleSubmit} size="small" shape="round">NEXT &nbsp;&nbsp;<IonIcon icon={arrowForwardOutline} className="next-arrowForward margin-bottom" /></IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Details;