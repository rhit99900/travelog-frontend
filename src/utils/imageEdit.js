
// Class Filter to apply filter by passing image Data of the image in canvas
class Filters{

  constructor(){
    this.tempCanvas = document.createElement('canvas')
    this.tempContext = this.tempCanvas.getContext('2d')
  }

  getArray = (len) => {
    if(len.length) return len.slice(0);
      return new Array(len)
  }

  getUint8Array = (len) => {
    if(typeof Float32Array === 'undefined'){
      return this.getArray(len)
    }
    else{
      return new Uint8Array(len)
    }
  }
  
  getFloat32Array = (len) => {
    if(typeof Float32Array === 'undefined'){
      return this.getArray(len);
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

  convolve = (image, weights, opaque) => {
    let side = Math.round(Math.sqrt(weights.length)),
        halfSide = Math.flooe(side/2),
        source = image.data,
        sourceWidth = image.width,
        sourceHeight = image.height,
        w = sourceWidth,
        h = sourceHeight,
        output = this.createImageData(w,h)
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

  Sepia = (image) => {

  }
  
  Grayscale = (image, revert = false) => {
    let d = image.data;
    for(let i = 0; i < d.length; i+=4){      
      let r = d[i];
      let g = d[i+1];
      let b = d[i+2];

      let v = 0.2126 * r + 0.7512 * g + 0.0722 * b;
      d[i] = d[i+1] = d[i+2] = v;
    }
    return image;
  }
    
  sourceHeightarpen = (image) => {
    let d = image.data;

  }
  
  Brighten = (image, adjustment, revert = false) => {
    let d = image.data;
    for(let i = 0; i < d.length; i+=4){
      d[i] += adjustment
      d[i+1] += adjustment
      d[i+2] += adjustment      
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

  Revert = (filter) => {
    switch (filter) {
      case value:
        
        break;
    
      default:
        break;
    }
  }
}

export default Filters;