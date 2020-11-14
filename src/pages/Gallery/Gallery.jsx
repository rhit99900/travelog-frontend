import React, { useEffect, useState } from 'react'

import {
    IonContent,
    IonPage,    
    IonRow,
    IonCol,    
    IonGrid,    
} from '@ionic/react'
import './Gallery.css'

import PostDetailHeader from '../../components/PostDetailHeader'

const Gallery = () => {

  const [styles, setStyles] = useState({})
  const grid = React.createRef()

  useEffect(() => {    
    if(grid.current.children.length > 0){
      setTimeout(() => {
        console.log(grid.current.children[0].clientWidth)
        let width = grid.current.children[0].clientWidth;
        if(width !== 0 && styles.height !== width){
          setStyles({...styles, height: width, width: width})
        }
      },1000)
    }
  })

  return (
    <IonPage id="galleryPage">
      <IonContent className="light">
        <PostDetailHeader />
        <IonGrid className="galleryGrid">           
          <IonRow ref={grid}>    
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item, index) => (      
              <IonCol key={index}  size="4" size-sm  className="slideBoxCol" style={styles}>
                <img className="imageTag" src="https://picsum.photos/536/354"/>
              </IonCol>             
            ))}         
          </IonRow>         
        </IonGrid>       
      </IonContent>
    </IonPage>
  )
}

export default Gallery;