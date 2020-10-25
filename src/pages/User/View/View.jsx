import React from 'react';
import { IonContent, 
		 IonHeader, 
		 IonPage, 
		 IonTitle, 
		 IonToolbar,
		 IonGrid,
		 IonRow,
		 IonCol, 

		 IonButton,
		 IonFooter,
		 IonIcon,
		 IonSegment,
		 Event,
		 IonSlides, IonSlide,
		 IonItem, IonLabel, IonBadge,IonCardContent, IonCardHeader, IonCardSubtitle, IonThumbnail, IonImg } from '@ionic/react';

import { searchOutline, personSharp, chatboxOutline, heartOutline, heartSharp} from 'ionicons/icons';


import './View.css';
const slideOpts = {
  initialSlide: 0,
  speed: 400,
   spaceBetween: 100,
  grabCursor: true,
   effect: 'fade'
};

function next(slide, index) {
    slide.slideTo(index)
};



const View = () => {
  return (
  <IonPage>
    <IonContent fullscreen class="ion-padding" scroll-y="false" className="light">
	<IonHeader>
		<IonGrid>
			<IonRow>
		  		<IonCol size='8'>
			         <IonLabel>
			            <h1 class="placeHeader">Paris, France</h1>    
			            <h3 class="placeSubHeader"><IonIcon slot="end" icon={personSharp} /> Richard Parker</h3>    
			          </IonLabel>
	          	</IonCol>

	          	<IonCol size="2">      
		          	<IonLabel>    
		               <span class="commentTxt">256</span>  <IonIcon class="smallIcons" slot="end" icon={chatboxOutline}> 98</IonIcon>             
		         	</IonLabel>
         		</IonCol>

	         	<IonCol size="2" >
		         	<IonLabel>
		               <span class="commentTxt">576</span>  <IonIcon class="smallIcons" slot="end" icon={heartOutline}> 98</IonIcon>             
		            </IonLabel>
	            </IonCol>
          	</IonRow>

	    	<IonRow>
		  		<IonCol size='4'>
	    			<IonLabel class="active">Photos</IonLabel>
	    		</IonCol>
				<IonCol size='4'>
	     			<IonLabel class="default">Places</IonLabel>
	     		</IonCol>
	     		<IonCol size='2'>
	     			<IonLabel class="default">...</IonLabel>
	     		</IonCol>
	     		<IonCol size="1">
	     			<IonIcon class="searchIcon" icon={searchOutline} />
	     		</IonCol>
	     		</IonRow>
	     </IonGrid>
	
	</IonHeader>	 
  
        <IonSlides id="slides" className="IonSlides" pager={true} options={slideOpts}>
       
  {[1,2,3,4].map((item, index) => (      
        <IonSlide>
         <div line="none" className="mainDiv" >
         	<p className="headerContent">
	         	<span className="leftContent" slot="left">08:45 AM</span>
	         	<span className="content text-right" slot="left">Notre Dam cathedral</span>	   
	         </p>      
       		<img height="100%" src="https://picsum.photos/536/354" className="slideImg"/>
         </div> 
        <IonItem lines="none">
         <IonLabel className="leftContent">    
           <span className="contentDivCommentTxt">256</span>  <IonIcon className="smallIcons" slot="end" icon={chatboxOutline}> 98</IonIcon>             
     	 	&nbsp;<span className="contentDivCommentTxt ion-margin-left">576</span>  <IonIcon className="smallIcons" color="primary" slot="end" icon={heartSharp}> 98</IonIcon>            
     	  </IonLabel>         
     	   </IonItem>

    		<IonItem lines="none" className="text-left contextTxt">         
         	First stop the iconic Notre Dame cathedral, we got here nice and early, best to avoid the ilnes.
         	This allowed us to climp the towers to enjoy Paris from a gargoyale's panormic perspective and to admire the gargoyales and grotesques themselves.        	
         </IonItem>
        </IonSlide>
 ))};       
       

      </IonSlides>
    </IonContent>
  </IonPage>

  );
};

export default View;
