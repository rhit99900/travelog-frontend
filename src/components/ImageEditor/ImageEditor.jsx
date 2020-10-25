import { IonButton, IonCol, IonInput, IonRow, IonGrid } from '@ionic/react';
import React, { useEffect, useState } from 'react'

var canvas, context;

const Editor = ({image}) => {

  // const [ scale, setScale ] = useState(1);
  const [ rotate, setRotate ] = useState(0);
  // const [ width, setWidth ] = useState(280);
  // const [ height, setHeight ] = useState(300);
  // const [ editor, setEditor ] = useState(null);
  const [ img, setImg ] = useState();
  const [ editedMedia, setEditedMedia ] = useState(null);
  
  // const [ canvas, setCanvas ] = useState();
  // const [ context, setContext ] = useState();

  // const setEditorRef = editorRef => {
  //   if(editorRef) setEditor(editorRef);
  // }

  const dataURLtoBlob = (dataURL, imageType) => {
    const binary = atob(dataURL.split(',')[1]);
    const array = [];
    let i = 0;
    while (i < binary.length) {
      array.push(binary.charCodeAt(i));
      i += 1;
    }
    return new Blob([new Uint8Array(array)], { type: imageType });
  };

  const saveImage = (e) => {
    const rawImage = canvas.toDataURL('image/jpeg', 0.7);
    // setEditedMedia(rawImage);    
    const imageType = `image/${rawImage.split(';')[0].split('/')[1]}`;
    const blob = (dataURLtoBlob(rawImage, imageType));
  
    const file = new File([blob], 'image', { type: imageType, lastModified: Date.now() });
    console.log(file);
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

    console.log(img.naturalWidth, img.naturalHeight);

    context.drawImage(img, 0, 0, canvas.width, img.naturalHeight * canvas.width / img.naturalWidth);    
    context.save();
  }

  const resize = (img) => {

  }

  const addFilter = () => {
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height), 
        pxData = imgData.data, 
        length = pxData.length; 
        for(var x = 0; x < length; x+=4) { 
            //convert to grayscale 
            var r = pxData[x], 
                g = pxData[x + 1], 
                b = pxData[x + 2], 
            sepiaR = r * .393 + g * .769 + b * .189, 
            sepiaG = r * .349 + g * .686 + b * .168, 
            sepiaB = r * .272 + g * .534 + b * .131; 
            pxData[x] = sepiaR; 
            pxData[x + 1] = sepiaG; 
            pxData[x + 2] = sepiaB;                              
        } 
                      
    //paint sepia image back 
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
  
  const buildCanvas = () => {
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')
    // Load image from url or Path Name;
    const img = loadImage(image);
    draw(img)
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
      
      <IonButton type="range" onClick={e => rotateImage(90)}>Rotate +90 </IonButton>
      <IonButton type="range" onClick={e => rotateImage(-90)}>Rotate -90 </IonButton>
      <IonButton type="range" onClick={e => addFilter()}>Sepia </IonButton>
      <IonButton type="button" expand="block" onClick={saveImage}>Next</IonButton>
    </>
  )
}

export default Editor;