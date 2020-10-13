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
		 IonItem, IonLabel, IonBadge,IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/react';

import { arrowForwardSharp, personSharp, personOutline, heartOutline, arrowBackOutline} from 'ionicons/icons';

import './Itinerary.css';

import ItineraryHighlights from '../../../components/Itinerary/Highlights'

const Itinerary = () => {
  return (
    <IonPage>
    	<IonContent class="background" scroll="false">
    	<IonItem lines="none" class="ionItemNoBg">    
    	
		 <IonIcon icon={arrowBackOutline} />
		 <IonBadge  class="buildingBadge" color="light">Building</IonBadge>
		
		 </IonItem>
   		<IonItem lines="none" class="ionItemNoBg itineraryInfo">    
		   <IonRow>
			   <IonCol size="6">     
				  <IonLabel>
				    <h1>Paris, France</h1>    
				    <h3><IonIcon slot="end" icon={personSharp} /> Richard Parker</h3>    
				  </IonLabel>
			  </IonCol>
			  <IonCol size="4" class="ion-padding-top" >
			   	<IonButton shape="round">SAVE</IonButton>
			  </IonCol>
			  <IonCol size="1"   class="ion-padding-top" >
			  <IonLabel>
			  	<IonIcon slot="end" icon={personOutline} />
			   <p class="smallTxt">1.4k</p>		 

			  </IonLabel>
			    </IonCol>
			      <IonCol size="1" class="ion-padding-top" >
			   <IonLabel>
			  	<IonIcon slot="end" icon={heartOutline} />
			   <p class="smallTxt">1.4k</p>	 

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
           <p class="pText">The best baguette in paris, there iterally is an award for that and it belongs to these guys! Must visit for breakfast. try their Almond and apricot bread, Chocolate tarts and Pain au chocolates. Probably the best way to begin your day in this beautiful city.</p>
   			  <IonButton class="moreBtn"  shape="round"> 
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
