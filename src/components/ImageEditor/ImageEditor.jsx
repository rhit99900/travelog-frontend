import { IonButton, IonCol, IonInput, IonRow, IonGrid, IonIcon } from '@ionic/react';
import React, { useEffect, useState, useContext } from 'react'
import { StorageContext } from '../../contexts/StorageContext'

import Filters from '../../utils/imageEdit'

import path from 'path'

var canvas, context;

const Editor = ({image}) => {

  const [ rotate, setRotate ] = useState(0);
  
  const [ img, setImg ] = useState();
  const [ editedMedia, setEditedMedia ] = useState(null);

  // Initialising Filter Object from Filter Class 
  const FilterObj = new Filters
  const { HorizontalFlip, VerticalFlip, Luminance, Grayscale, Sepia } = FilterObj;
  
  const { uploadItem } = useContext(StorageContext)


  const saveImage = async (e) => {        
    const rawImage = canvas.toDataURL('image/jpeg', 0.3);
    console.log(rawImage);
    const imageType = `image/${rawImage.split(';')[0].split('/')[1]}`;
      
    let image = await uploadItem({
      name: 'image',
      mimeType: imageType,
      data: rawImage,
    });
    console.log(image);
  }

  const loadImage = (path) => {
    let img = new Image()
    img.src = path
    img.crossOrigin = "anonymous"
    setImg(img);    
    return img;  
  }

  const draw = (img) => {    
    if(!img.complete){
      setTimeout(() => {
        draw(img);
      },50)
      return; 
    }          

    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    context.drawImage(img, 0, 0, canvas.width, img.naturalHeight * canvas.width / img.naturalWidth);        
  }
  

  const resize = (img) => {

  }

  const addFilter = (type) => {
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    switch (type) {
      case 'grayscale':
        imgData = Grayscale(imgData);    
        break;
      case 'luminance':
        imgData = Luminance(imgData);
        break;
      default:
        break;
    }      
    context.putImageData(imgData, 0, 0); 
  }

  const rotateImage = (deg) => {

    let config = {
      x: 0,
      y: 0,
      r: deg * Math.PI/180
    }

    if(deg > 0){
      config.x = canvas.width;
    }
    else{
      config.y = canvas.height;
    }

    let imageCopy = loadImage(canvas.toDataURL());

    context.clearRect(0,0,canvas.width, canvas.height)
    context.translate(config.x, config.y)
    context.rotate(config.r)
    draw(imageCopy)
  }

  const flip = (direction) => {
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    switch (direction) {
      case 'horizontal':
        imgData = HorizontalFlip(imgData)
        break;
      case 'vertical':
        imgData = VerticalFlip(imgData)
        break;
      default:
        break;
    }
    context.putImageData(imgData, 0, 0); 
  }
  
  const buildCanvas = () => {
    canvas = document.getElementById('canvas')    
    context = canvas.getContext('2d')
    // Load image from url or Path Name;
    const img = loadImage(image);
    console.log(img.naturalWidth);
    draw(img);
  }

  useEffect(() => {        
    buildCanvas();
  },[])
  

  return (
    <>
      <div id="resizer">

      </div>
      <canvas id="canvas" className="editorCanvas">
        Sorry, not supported on Browser.
      </canvas>
      <IonGrid>
        <IonRow>
          <IonCol size="3">Rotate</IonCol>
          <IonCol size="3">Resize</IonCol>
          <IonCol size="3">B/W</IonCol>
          <IonCol size="3">Sepia</IonCol>
        </IonRow>
      </IonGrid>
      {editedMedia !== null ? (
        <img src={editedMedia} />
      ): null}
      
      <IonButton className="imageEditorAction" onClick={e => rotateImage(-90)}><IonIcon src="/assets/icon/rotate-left.svg" /></IonButton>
      <IonButton className="imageEditorAction" onClick={e => rotateImage(90)}><IonIcon src="/assets/icon/rotate-right.svg" /></IonButton>      
      <IonButton className="imageEditorAction" onClick={e => addFilter('grayscale')}>Grayscale </IonButton>
      <IonButton className="imageEditorAction" onClick={e => addFilter('luminance')}>Luminance </IonButton>
      <IonButton className="imageEditorAction" onClick={e => flip('horizontal')}>Horizonal Flip </IonButton>
      <IonButton className="imageEditorAction" onClick={e => flip('vertical')}>Vertical Flip </IonButton>
      <IonButton className="imageEditorAction" onClick={e => rotateImage(90)}><IonIcon src="/assets/icon/resize.svg" /></IonButton>  
      <IonButton className="imageEditorAction" type="button" expand="block" onClick={saveImage}>Next</IonButton>
    </>
  )
}

export default Editor;