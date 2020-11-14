import { Calculate } from './libraryFunctions'

const Cal = new Calculate()

// Class Filter to apply filter by passing image Data of the image in canvas
class Filters{

  constructor(){
    this.tempCanvas = document.createElement('canvas')
    this.tempContext = this.tempCanvas.getContext('2d')

  }  

  getUint8Array = (len) => {
    if(typeof Float32Array === 'undefined'){
      return Cal.getArray(len)
    }
    else{
      return new Uint8Array(len)
    }
  }
  
  getFloat32Array = (len) => {
    if(typeof Float32Array === 'undefined'){
      return Cal.getArray(len);
    }
    else{
      return new Float32Array(len);
    }
  }

  createImageData = (w, h) => {
    // return {width: w, height: h, data: Filters.getFloat32Array(w*h*4)}
    return this.tempContext.createImageData(w,h);
  }

  identity = (image, argument) => {
    let output = this.createImageData(image.width, image.height)
    let dst = output.data
    let d = image.d
    for(let i=0;i<d.length;i++){
      dst[i] = d[i];
    }

    return output;
  }

  identityMatrix = () => {
    let matrix = this.getUint8Array(256);
    for(let i=0; i < matrix.length; i++){
      matrix[i] = i
    }
    return matrix;
  }

  applyMatrix = (image, matrix) => {
    let output = this.createImageData(image.width, image.height);
    let d = image.data;
    let dst = output.data;
    let r = matrix.r;
    let g = matrix.g;
    let b = matrix.b;
    let a = matrix.a;
    for (let i=0; i<d.length; i+=4) {
      dst[i] = r[d[i]];
      dst[i+1] = g[d[i+1]];
      dst[i+2] = b[d[i+2]];
      dst[i+3] = a[d[i+3]];
    }
    return output;
  }

  brightnessContrastMatrix = (brightness, contrast) => {
    let matrix = this.getUint8Array(256),
        contrastAdjust = -128 * contrast + 128,
        brightnessAdjust = 255 * brightness,
        adjust = contrastAdjust + brightnessAdjust
    
    for(let i=0; i < matrix.length; i++){
      let c = i * contrast + adjust
      matrix[i] = c < 0 ? 0 : (c > 255 ? 255 : c)
    }
    return matrix;
  }



  convolve = (image, weights, opaque) => {
    let side = Math.round(Math.sqrt(weights.length)),
        halfSide = Math.flooe(side/2),
        source = image.data,
        sourceWidth = image.width,
        sourceHeight = image.height,
        w = sourceWidth,
        h = sourceHeight,
        output = this.createImageData(w,h),
        dst = output.data,
        alphaFac = opaque ? 1 : 0

    for (let y=0; y<h; y++) {
      for (let x=0; x<w; x++) {
        let sy = y;
        let sx = x;
        let dstOff = (y*w+x) * 4;
        let r=0, g=0, b=0, a=0;
        for (let cy=0; cy<side; cy++) {
          for (let cx=0; cx<side; cx++) {
            let scy = Math.min(sourceHeight-1, Math.max(0, sy + cy - halfSide));
            let scx = Math.min(sourceWidth-1, Math.max(0, sx + cx - halfSide));
            let sourceOff = (scy * sourceWidth + scx)*4;
            let wt = weights[cy * side + cx];
            r += source[sourceOff] * wt;
            g += source[sourceOff + 1] * wt;
            b += source[sourceOff + 2] * wt;
            a += source[sourceOff + 3] * wt;
          }
        }
        dst[dstOff] = r;
        dst[dstOff+1] = g;
        dst[dstOff+2] = b;
        dst[dstOff+3] = a + alphaFac*(255-a);
      }
    }
    return output;
  }

  HorizontalFlip = (image) => {    
    let output = this.createImageData(image.width, image.height)
    let w = image.width,
        h = image.height,
        dst = output.data,
        d = image.data
      
    for(let y = 0; y < h; y++){
      for(let x = 0; x < w; x++){
        let off = (y*w+x) * 4
        let dstoff = (y*w + (w-x-1)) * 4
        dst[dstoff] = d[off]
        dst[dstoff + 1] = d[off + 1]
        dst[dstoff + 2] = d[off + 2]
        dst[dstoff + 3] = d[off + 3]
      }
    }    
    return output;
  }

  VerticalFlip = (image) => {    
    let output = this.createImageData(image.width, image.height)
    let w = image.width,
        h = image.height,
        dst = output.data,
        d = image.data
      
    for(let y = 0; y < h; y++){
      for(let x = 0; x < w; x++){
        let off = (y*w+x) * 4
        let dstoff = ((h-y-1)*w+x) * 4
        dst[dstoff] = d[off]
        dst[dstoff + 1] = d[off + 1]
        dst[dstoff + 2] = d[off + 2]
        dst[dstoff + 3] = d[off + 3]
      }
    }    
    return output;
  }

  Noise = (image, value) => {

  }

  Resize = (size) => {

  }

  Rotate = (canvas, degrees) => {
    let width, height, x,y
    let angle = degrees % 360
    // if(angle === 0){      
    // }
    let to_radians = Math.PI/180      
  }

  Luminance = (image) => {
    let output = this.createImageData(image.width, image.height)
    let dst = output.data,
        d = image.data;
      
    for(let i=0; i< d.length; i++){
      let r = d[i];
      let g = d[i+1];
      let b = d[i+2];
      // CIE luminance for the RGB
      let v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      dst[i] = dst[i+1] = dst[i+2] = v;
      dst[i+3] = d[i+3];
    }
    return output;
  }  

  Invert = (image) => {
    let output = this.createImageData(image.width, image.height);
    let d = image.data;
    let dst = output.data;
    for (let i=0; i<d.length; i+=4) {
      dst[i] = 255 - d[i];
      dst[i + 1] = 255 - d[i+1];
      dst[i + 2] = 255 - d[i+2];
      dst[i + 3] = d[i + 3];
    }
    return output;
  }

  Sepia = (image, sepia = 100) => {       
    sepia /= 100
    let d = image.data;
    for(let i = 0; i < d.length; i+=4){  
      // All three color channels have special conversion factors that 
      // define what sepia is. Here we adjust each channel individually, 
      // with the twist that you can partially apply the sepia filter. 
      d[i] = Math.min(255,(d[i] * (1 - (0.607 * sepia))) + (d[i + 1] * (0.769 * sepia)) + (d[i + 2] * (0.189 * sepia)))
      d[i + 1] = Math.min(255,(d[i] * (0.349 * sepia)) + (d[i + 1] * ( 1 - (0.314 * sepia))) + (d[i + 2] * (0.168 * sepia)))
      d[i + 2] = Math.min(255,(d[i] * (0.272 * sepia)) + (d[i + 1] * (0.534 * sepia)) + (d[i + 2] * (1 - (0.869 * sepia))))            
    }
    return image;
  }
  
  Grayscale = (image, value, revert = false) => {
    let d = image.data;
    for(let i = 0; i < d.length; i+=4){      
      let r = d[i];
      let g = d[i + 1];
      let b = d[i + 2];

      let v = 0.34 * r + 0.5 * g + 0.16 * b;
      d[i] = d[i + 1] = d[i + 2] = v * (1-0.1);
    }
    return image;
  }
    
  sourceHeightarpen = (image) => {
    let d = image.data;

  }

  BrightnessContrast = (image, brightness = false, contrast = false) => {
    let matrix = this.brightnessContrastMatrix(brightness, contrast);
    return this.applyMatrix(image, {r: matrix, g: matrix, b: matrix, a: this.identityMatrix()});
  }

  Channels = (image, options) => {
    let value
    if(typeof options !== 'object'){
      return 
    }
    for (let j in options){
      if(!{}.hasOwnProperty.call(options, j)) continue;
      value = options[j]      
      if(value === 0){
        delete options[j]
        continue;
      }
      options[j] /= 100
    }
    if(options.length === 0){

    }
    let d = image.data
    for(let i = 0; i < d.length; i+=4){  
      if(options.red !== null){
        if(options.red > 0){
          d[i] += (255 - d[i]) * options.red
        } else {
          d[i] -= d[i] * Math.abs(options.red)
        }
      }
      if(options.green !== null){
        if(options.green > 0){
          d[i + 1] += (255 - d[i + 1]) * options.green
        } else {
          d[i + 1] -= d[i + 1] * Math.abs(options.green)
        }
      }
      if(options.blue !== null){
        if(options.blue > 0){
          d[i + 2] += (255 - d[i + 2]) * options.blue
        } else {
          d[i + 2] -= d[i + 2] * Math.abs(options.blue)
        }
      }
    }
    return image
  }

  Brightness = (image, brightness) => {
    let d = image.data;    
    for(let i = 0; i < d.length; i+=4){            
      d[i] += brightness;
      d[i + 1] += brightness;
      d[i + 2] += brightness;      
    }
    return image;
  }

  Contrast = (image, contrast) => {    
    let d = image.data
    contrast = Math.pow((contrast + 100) / 100, 2)

    for(let i = 0; i < d.length; i+=4){      
      // Red Channel
      let r = d[i];      
      r /= 255      
      r -= 0.5      
      r *= contrast      
      r += 0.5      
      r *= 255
      d[i] = Math.round(r)      

      // Green Channel
      let g = d[i + 1]
      g /= 255
      g -= 0.5
      g *= contrast
      g += 0.5
      g *= 255
      d[i + 1] = Math.round(g)

      // Blue Channel 
      let b = d[i + 2]
      b /= 255
      b -= 0.5
      b *= contrast
      b += 0.5
      b *= 255
      d[i + 2] = Math.round(b)
    }    
    return image;
  }

  Saturation = (image, saturation) => {
    saturation *= 0.01
    let d = image.data;    
    for(let i = 0; i < d.length; i+=4){    
      let max = Math.max(d[i], d[i + 1], d[i + 2])
      d[i] += d[i] !== max ? (max - d[i]) * saturation : 0
      d[i + 1] += d[i + 1] !== max ? (max - d[i + 1]) * saturation : 0
      d[i + 2] += d[i + 2] !== max ? (max - d[i + 2]) * saturation : 0
    }
    return image;
  }

  Vibrance = (image, vibrance) => {
    let d = image.data;
    for(let i = 0; i < d.length; i+=4){    
      let max = Math.max(d[i], d[i + 1], d[i + 2])
      let avg = (d[i] + d[i + 1] + d[i + 2])/3
      let vibranceAmount = ((Math.abs(max - avg) * 2 / 255) * vibrance) / 100
      d[i] += d[i] !== max ? (max - d[i]) * vibranceAmount : 0
      d[i + 1] += d[i + 1] !== max ? (max - d[i + 1]) * vibranceAmount : 0
      d[i + 2] += d[i + 2] !== max ? (max - d[i + 2]) * vibranceAmount : 0
    }
    return image;
  }

  Threshold = (image, threshold) => {
    let d = image.data;    
    for(let i = 0; i < d.length; i+=4){            
      let r = d[i]
      let g = d[i + 1]
      let b = d[i + 2]
      let v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
      d[i] = d[i + 1] = d[i + 2] = v
    }
    return image;
  }
    
  GaussianBlur = (image, diameter) => {
    diameter = Math.abs(diameter)
    // if(diameter <= 1)
    let r = diameter/2
    let len = Math.ceil(diameter) - (1 - (Math.ceil(diameter)%2))
    let w
  }  

  Curves = (image, channels, controlPoints) => {
    let algo
    let last = controlPoints[controlPoints.length - 1]
    if(typeof last === 'function'){
      algo = last
      controlPoints.pop()
    }
    else if(typeof last === 'string'){
      algo = Cal[last]
    }
    else{
      algo = Cal.bezier
    }

    if(typeof channels === 'string') channels = channels.split("")    
    if(channels[0] === 'v') channels = [0, 1, 2]

    if(controlPoints.length < 2){
      return false;
    }

    let bezier = algo(controlPoints, 0, 255)
    let start = controlPoints[0]
    if(start[0] > 0){
      for(let i = 0; i <= start[0]; i++){
        bezier[i] = start[1]
      }
    }
    let end = controlPoints[controlPoints.length - 1]
    if(end[0] < 255){
      for(let i=end[0]; i <= 255; i++){
        bezier[i] = end[1];
      }    
    }
    let d = image.data
    for(let i = 0; i < d.length; i+=4){
      for(let j = 0; j < channels.length; j++){
        d[i + channels[j]] = bezier[d[i + channels[j]]]
      }
    }

    return image
  }
  
  Hue = (image, hue) => {
    let d = image.data;    
    for(let i = 0; i < d.length; i+=4){
      let hsv = Cal.rgbToHSV(d[i], d[i + 1], d[i + 2]);
      let h = hsv.h * 100 
      h += Math.abs(hue)
      h = h % 100 
      h /= 100
      hsv.h = h
      
      let rgb = Cal.hsvToRGB(hsv.h, hsv.s, hsv.v)
      d[i] = rgb.r
      d[i + 1] = rgb.g
      d[i + 2] = rgb.b
    }
    return image;
  }

  Gamma = (image, gamma) => {
    let d = image.data;    
    for(let i = 0; i < d.length; i+=4){    
      d[i] = Math.pow(d[i] / 255, gamma) * 255
      d[i + 1] = Math.pow(d[i + 1] / 255, gamma) * 255
      d[i + 2] = Math.pow(d[i + 2] / 255, gamma) * 255
    }
    return image;
  }

  Exposure = (image, exposure) => {
    let p = Math.abs(exposure) / 100
    let control1 = [0, 255 * p],
        control2 = [255 - (255*p), 255]
    
    if(exposure < 0){
      control1 = control1.reverse()
      control2 = control2.reverse()
    }

    image = this.Curves('rgb',[0,0],control1, control2, [255,255]);
    return image;    
  }

  Colorize = (image, options) => {
    let rgb = {}, level
    if(options.length === 2){
      rgb = Cal.hexToRGB(options[0])
      console.log(rgb);
      level = options[1]
    }
    else if(options.length === 4){
      rgb = {
        r: options[0],
        g: options[1],
        b: options[2]
      }
      level = options[3]
    }
    let d = image.data
    for(let i = 0; i < d.length; i+=4){         
      d[i] = (d[i] - rgb.r) * (level / 100)
      d[i + 1] = (d[i + 1] - rgb.g) * (level / 100)
      d[i + 2] = (d[i + 2] - rgb.b) * (level / 100)
    }
    return image;
  }

  Noise = (image, noise) => {
    noise = Math.abs(noise) * 2.55
    let d = image.data
    for(let i = 0; i < d.length; i+=4){   
      let random = Math.random(noise * -1, noise)         
      d[i] += random 
      d[i + 1] += random
      d[i + 2] += random    
    }
    return image;
  }

  // Preset Filters 
  Vintage = (image) => {
    image = this.Grayscale(image)
    image = this.Contrast(image, 5)
    image = this.Noise(image, 3)
    image = this.Sepia(image, 100)
    image = this.Channels(image, {red: 8, blue: 2, green: 4})
    image = this.Gamma(image, 0.87)
    return image;
  }

  Lomo = (image) => {
    image = this.Brightness(image, 15)
    // image = this.Exposure(image, 15)
    image = this.Saturation(image, -20)
    image = this.Gamma(image, 1.8)
    image = this.Brightness(image, 5)
    return image;
  }

  Clarity = (image) => {
    image = this.Vibrance(image, 20)
    return image;    
  }

  SinCity = (image) => {
    image = this.Contrast(image, 100)
    image = this.Brightness(image, 15)
    return image;
  }

  Sunrise = (image) => {
    // image = this.Exposure(image, 3.5)
    image = this.Saturation(image, -5)
    image = this.Vibrance(image, 50)
    image = this.Sepia(image, 60)
    // image = this.Colorize(image, ['#e87b22', 10])
    // image = this.Channels(image, { r: 8, b: 8})
    image = this.Contrast(image, 5)
    image = this.Gamma(image, 1.2)
    if(this.Vignette) image = this.Vignette(image, "55%", 25)
    return image;
  }

  Grungy = (image) => {
    image = this.Gamma(image, 1.5)
    image = this.Saturation(image, -60)
    image = this.Contrast(image, 5)
    image = this.Noise(image, 5)
    return image;
  }
  


  

  Revert = (filter) => {
    switch (filter) {
      case 'something':
        
        break;
    
      default:
        break;
    }
  }
}

export default Filters;