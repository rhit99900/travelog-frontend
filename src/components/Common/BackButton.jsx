import React, { memo } from 'react'
import { IonIcon } from '@ionic/react'
import { arrowBack } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

import './Style.css';

const Back = ({path}) => {
  const history = useHistory();
  
  const go = () => {        
    history.push(path);
    console.log(history);
  }

  return (
    <div className="backButton" onClick={go}>
      <IonIcon icon={arrowBack} />
    </div>
  )
}

export default memo(Back);