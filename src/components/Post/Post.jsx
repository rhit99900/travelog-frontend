import React from 'react';
import { IonCard, IonCardContent, IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/react';

import './Post.css'
import { heart, chatbubble } from 'ionicons/icons';

const Post = (post) => {
    
  return(
    <IonCard className="postContainer">
      <IonChip className="postAuthorContainer">
        <IonAvatar className="postAuthorAvatar">
          <img src="https://picsum.photos/id/237/20/20" />
        </IonAvatar>
        <IonLabel className="postAuthorName">Chip Avatar</IonLabel>
      </IonChip>
      <div className="postImageContainer">
        <img className="postImage" src="https://picsum.photos/seed/name/500/320"/>
      </div>
      <IonCardContent className="postDetailsContainer">
        <div className="postActionContainer">
          <IonIcon className="postActionIcons" icon={heart}></IonIcon>
          <IonChip className="postActionCountLabel">300</IonChip>
          <IonIcon className="postActionIcons" icon={chatbubble}></IonIcon>
          <IonChip className="postActionCountLabel">200</IonChip>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
      </IonCardContent>     
    </IonCard>
  )
}

export default Post