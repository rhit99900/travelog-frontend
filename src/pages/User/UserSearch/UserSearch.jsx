import React, { useEffect, useState } from 'react'

import {
    IonContent,
    IonPage,
    IonRow,
    IonHeader,
    IonIcon,
    IonLabel,
    IonCol,
    IonGrid,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react'

import { returnDownForward, searchOutline, personSharp, heartSharp, chatboxOutline, heartOutline, arrowBackOutline } from 'ionicons/icons'
import './UserSearch.css'


const UserSearch = () => {
    return (
        <IonPage id="userSearchPage">
    <IonHeader>
      <IonGrid>
        <IonRow className="arrowBackIonRow">
          <IonCol>
            <IonIcon icon={arrowBackOutline} className="arrowBack margin-bottom" />
          </IonCol>
        </IonRow>
      
      </IonGrid>  
    </IonHeader>
    <IonContent>      
     <IonSearchbar color="light" placeholder="" value=""></IonSearchbar>
        <div className="postSaveAction">
          <IonIcon className="returnDownIcon" icon={returnDownForward}  data-action="view" />
        </div>
      <IonCard>
      <IonCardContent>
       <IonGrid>  
         <IonRow>
            <IonCol size="4" >  
            <img className="galleryImg" src="https://www.w3schools.com/css/rock600x400.jpg" />     
            </IonCol>

             <IonCol  size="8" >  
               <IonCardHeader>
                <IonCardTitle aliu className="picTitle">Paris, France</IonCardTitle>
               </IonCardHeader>
            <p className="picContent"> Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, 
            Madison was named.</p>
              <h3 className="iconText" ><IonIcon slot="end" className="contentIcons" icon={personSharp} /> 1.4k &nbsp;  <IonIcon className="contentIcons"  slot="end" icon={heartSharp}> 98</IonIcon><span className="commentTxt">576</span> </h3>            
             </IonCol>
           
          </IonRow>       
        </IonGrid>   
         
        </IonCardContent>
       </IonCard>
       <div className="postSaveAction">
          <IonIcon className="returnDownIcon" icon={returnDownForward}  data-action="view" />
        </div>
      <IonCard>
      <IonCardContent>
       <IonGrid>  
         <IonRow>
            <IonCol size="4" >  
            <img className="galleryImg" src="https://www.w3schools.com/css/rock600x400.jpg" />     
            </IonCol>

             <IonCol  size="8" >  
               <IonCardHeader>
                <IonCardTitle aliu className="picTitle">Paris, France</IonCardTitle>
               </IonCardHeader>
            <p className="picContent"> Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, 
            Madison was named.</p>
              <h3 className="iconText" ><IonIcon slot="end" className="contentIcons" icon={personSharp} /> 1.4k &nbsp;  <IonIcon className="contentIcons"  slot="end" icon={heartSharp}> 98</IonIcon><span className="commentTxt">576</span> </h3>            
             </IonCol>
           
          </IonRow>       
        </IonGrid>   
         
        </IonCardContent>
       </IonCard>
    </IonContent>
    </IonPage>
    )
}

export default UserSearch;