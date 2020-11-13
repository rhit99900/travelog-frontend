import { IonButton, IonCol, IonInput, IonRow, IonGrid, IonIcon, IonImg } from '@ionic/react';
import React, { useEffect, useState, useContext } from 'react'
import { StorageContext } from '../../contexts/StorageContext'

import Filters from '../../utils/ImageEdit/imageFilter'
import { ICON_URLS } from '../../utils/Constants'

var canvas, context;

const Editor = ({image}) => {
  
  const [ img, setImg ] = useState();
  const [ editedMedia, setEditedMedia ] = useState(null);
  
  const [ imageData, setImageData ] = useState();

  const [ imageEditParams, setImageEditParams] = useState({})

  // Initialising Filter Object from Filter Class 
  const FilterObj = new Filters
  const { 
    HorizontalFlip, 
    VerticalFlip, 
    Luminance, 
    Grayscale, 
    Invert, 
    BrightnessContrast, 
    Rotate,
    Brightness,
    Saturation,
    SinCity,
    Lomo,
    Vintage,
  } = FilterObj;
  
  const { uploadItem } = useContext(StorageContext)


  const saveImage = async (e) => {        
    const rawImage = canvas.toDataURL('image/jpeg', 1);    
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
    img.addEventListener('load', () => { 
      context.drawImage(img, 0, 0, canvas.width, img.naturalHeight * canvas.width / img.naturalWidth);        
    })
  }
  

  const resize = (img) => {

  }

  const addFilter = (type, value = 0) => {
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);    
    setImageEditParams({...imageEditParams, [type]:value});    

    switch (type) {
      case 'grayscale':
        imgData = Grayscale(imageData);    
        break;
      case 'luminance':
        imgData = Luminance(imageData);
        break;
      case 'invert':
        imgData = Invert(imageData);
        break;
      case 'brightness':
        imgData = Brightness(imageData, value)
        break;
      case 'saturation': 
        imgData = Saturation(imageData,value)
        break;
      case 'sincity':
        imgData = SinCity(imageData)
        break;            
      case 'vintage': 
        imgData = Vintage(imageData)
        break;
      case 'lomo':
        imgData = Lomo(imageData)
        break;
      default:
        break;
    }    
    context.clearRect(0,0,canvas.width, canvas.height)      
    context.putImageData(imgData, 0, 0); 
  }

  const rotateImage = (deg) => {

    // let config = {
    //   x: 0,
    //   y: 0,
    //   r: deg * Math.PI/180
    // }

    // if(deg > 0){
    //   config.x = canvas.width;
    // }
    // else{
    //   config.y = canvas.height;
    // }

    // let imageCopy = loadImage(canvas.toDataURL());

    // context.clearRect(0,0,canvas.width, canvas.height)
    // context.translate(config.x, config.y)
    // context.rotate(config.r)
    // draw(imageCopy)
    let newCanvas = Rotate(canvas, deg)
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
    context.clearRect(0,0,canvas.width, canvas.height)
    context.putImageData(imgData, 0, 0); 
  }
  
  const buildCanvas = () => {
    canvas = document.getElementById('canvas')    
    context = canvas.getContext('2d')
    // Load image from url or Path Name;
    const img = loadImage(image);
    img.addEventListener('load',() => {
      console.log('loaded');
      canvas.height = img.naturalHeight;
      canvas.width = img.naturalWidth;
      context.drawImage(img, 0, 0, canvas.width, img.naturalHeight * canvas.width / img.naturalWidth); 
      setImageData(context.getImageData(0, 0, canvas.width, canvas.height));
    })    
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
      {editedMedia !== null ? (
        <img src={editedMedia} />
      ): null}
      
      <IonButton className="imageEditorAction" onClick={e => rotateImage(-90)}><IonIcon src="/assets/icon/rotate-left.svg" /></IonButton>
      <IonButton className="imageEditorAction" onClick={e => rotateImage(90)}><IonIcon src="/assets/icon/rotate-right.svg" /></IonButton>            
      <IonButton className="imageEditorAction" onClick={e => addFilter('luminance')}>Luminance </IonButton>
      <IonButton className="imageEditorAction" onClick={e => flip('vertical')}><IonIcon src={ICON_URLS.flipVertical} /></IonButton>
      <IonButton className="imageEditorAction" onClick={e => flip('horizontal')}><IonIcon src={ICON_URLS.flipHorizonatal} /></IonButton>
      <IonButton className="imageEditorAction" onClick={e => rotateImage(90)}><IonIcon src={ICON_URLS.resize} /></IonButton>

      <div className="filterView">
        <div onClick={e => addFilter('grayscale')} className="imageFilterView grayscale"><img src={image} /></div>
        {/* <div onClick={e => addFilter('invert')} className="imageFilterView invert"><img src={image} /></div> */}
        <div onClick={e => addFilter('vintage')} className="imageFilterView vintage"><img src={image} /></div>
        <div onClick={e => addFilter('lomo')} className="imageFilterView lomo"><img src={image} /></div>
        <div onClick={e => addFilter('sincity')} className="imageFilterView sincity"><img src={image} /></div>
      </div>              

      <IonButton className="imageEditorAction" type="button" expand="block" onClick={saveImage}>Next</IonButton>

    </>
  )
}

export default Editor;