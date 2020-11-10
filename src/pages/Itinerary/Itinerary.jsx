import React from 'react';
import { IonContent, 
		 IonHeader, 
		 IonPage, 
		 IonTitle, 
		 IonToolbar,
		 IonRow,
		 IonCol, 
		 IonButton,
		 IonFooter,
		 IonIcon,
		 IonSegment,
		 IonSegmentButton,
		 IonItem, 
		 IonLabel, 
		 IonBadge,
		 IonCardContent, 
		 IonCardHeader, 
		 IonCardSubtitle } from '@ionic/react';

import { arrowForwardSharp, personSharp, personOutline, heartOutline, arrowBackOutline} from 'ionicons/icons';

import './Itinerary.css';

import ItineraryHighlights from '../../components/Itinerary/Highlights'

const Itinerary = () => {
  return (
    <IonPage id="itineraryPage">
    	<IonContent className="background" scroll="false">
    	<IonItem lines="none" className="ionItemNoBg ion-margin-top">    
    	
		 <IonIcon icon={arrowBackOutline} className="arrowBack" />
		 <IonBadge className="buildingBadge" color="light">Building</IonBadge>
		
		 </IonItem>
   		<IonItem lines="none" className="ionItemNoBg itineraryInfo">    
		   <IonRow>
			   <IonCol size="6" className="ion-padding-right">     
				  <IonLabel>
				    <h1>Paris, France</h1>    
				    <h3><IonIcon slot="end" icon={personSharp} /> Richard Parker</h3>    
				  </IonLabel>
			  </IonCol>

			  <IonCol size="4" className="ion-padding-top ion-padding-right" >
			   	<IonButton shape="round">SAVE</IonButton>
			  </IonCol>

			  <IonCol size="1" className="ion-padding-top ion-padding-right" >
			  	<IonLabel>
				  	<IonIcon slot="end" icon={personOutline} />
				   	<p className="smallTxt">1.4k</p>			  
			   	</IonLabel>
			   </IonCol>
			   <IonCol size="1" className="ion-padding-top ion-padding-right" >
				   <IonLabel>
					   <IonIcon slot="end" icon={heartOutline} />
					   <p className="smallTxt">1.4k</p>	 
				   </IonLabel>
			  </IonCol>
		  </IonRow>
		</IonItem>     
       <ItineraryHighlights /> 
    </IonContent>

    <IonFooter className="ion-no-border">
      <IonToolbar>
      <IonRow>
       <IonCol size="6">
       		<img src="assets/imgs/Capture.PNG"/>
        </IonCol>
         <IonCol size="6">
           <p className="pText">The best baguette in paris, there iterally is an award for that and it belongs to these guys! Must visit for breakfast. try their Almond and apricot bread, Chocolate tarts and Pain au chocolates. Probably the best way to begin your day in this beautiful city.</p>
   			  <IonButton className="moreBtn"  shape="round"> 
 				MORE               
                <IonIcon slot="end" icon={arrowForwardSharp} />                
              </IonButton>           
         </IonCol>
       </IonRow>
      </IonToolbar>
    </IonFooter>
    </IonPage>
  );
};

export default Itinerary;
