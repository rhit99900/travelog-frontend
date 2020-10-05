import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/react';

import './Post.css'
import { heart, chatbubble, returnDownForward, bookmarkOutline, bookmark } from 'ionicons/icons';

const Post = (post) => {

  const [ postStatus, setPostStatus ] = useState({
    is_liked: false,
    is_saved: false,    
  });

  const postActionTrigger = e => {
    if(e.target.hasAttribute('data-action')){
      let action = e.target.getAttribute('data-action');
      if(action === 'like'){
        setPostStatus({
          ...postStatus,
          is_liked: !postStatus.is_liked
        })
      }
      else if(action === 'save'){
        setPostStatus({
          ...postStatus,
          is_saved: !postStatus.is_saved
        })
      }
    }
  }

  useEffect(() => {    
    // TODO: If post is liked or saved, highlight like, save icons.
  },[post])
    
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
      <div className="postSaveActionContainer">        
        <div className="postSaveAction">
          <IonIcon 
            icon={postStatus.is_saved ? bookmark : bookmarkOutline} 
            onClick={postActionTrigger} data-action="save" 
            className={`${postStatus.is_saved? 'active': null}`}/>
        </div>
        <div className="postSaveAction">
          <IonIcon icon={returnDownForward} onClick={postActionTrigger} data-action="view" />
        </div>
      </div>
      <IonCardContent className="postDetailsContainer">
        <div className="postActionContainer">
          <IonIcon onClick={postActionTrigger} className={`postActionIcons ${postStatus.is_liked ? 'active': null}`} icon={heart} data-action="like"></IonIcon>
          <IonChip className="postActionCountLabel">300</IonChip>
          <IonIcon onClick={postActionTrigger} className="postActionIcons" icon={chatbubble} data-action="comment"></IonIcon>
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