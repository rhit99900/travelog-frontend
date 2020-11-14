export class Calculate{

  randomRange = (min, max, getFloat = false) => {
    let rand = min + (Math.random() * (max - min))
    if(getFloat) return rand
    else return Math.round(rand)
  }

  getArray = (len) => {
    if(len.length) return len.slice(0);
      return new Array(len)
  }

  luminance = (rgba) => {
    return (0.299 * rgba.r) + (0.587 * rgba.g) + (0.114 * rgba.b)
  }

  hexToRGB = (hex) => {
    if(hex.charAt(0) === '#'){
      hex = hex.substr(1)
    }
    let r = parseInt(hex.substr(0,2), 16)
    let g = parseInt(hex.substr(2,2), 16)
    let b = parseInt(hex.substr(4,2), 16)
    return { r: r, g: g, b: b}
  }

  hueToRGB = (p,q,t) => {
    if(t < 0) t += 1
    if(t > 1) t -= 1
    if(t < 1/6) return p + (q - p) * 6 * t
    if(t < 1/2) return q
    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6
    return p
  }

  rgbToHSV = (r, g, b) => {
    r /= 255
    g /= 255
    b /= 255

    let h,s,v 

    let max = Math.max(r,g,b)
    let min = Math.min(r,g,b)

    v = max
    let d = max - min 

    s = max === 0 ? 0 : d/max 
    if(max === min){
      h = 0;
    }
    else{ 
      h = (function(){
        switch(max){
          case r: 
            return (g - b) / d + (g < b ? 6 : 0);
            break;
          case g: 
            return (b - r) / d + 2;
            break;
          case b: 
            return (r - g) / d + 4
            break;
        }
      })();
      h /= 6
    }
    return  { h: h, s: s, v: v};
  }

  hsvToRGB = (h, s, v) => {
    let i = Math.floor(h * 6)
    let f = h * 6 - i
    let p = v * (1 - s)
    let q = v * (1 - f * s)
    let t = v * (1 - (1 - f) * s)
    let r,g,b 
    switch(i % 6){
      case 0: 
        r = v; g = t; b = p;
        break;
      case 1:
        r = q; g = v; b = p;
        break;
      case 2:
        r = p; g = v; b = t;
        break;
      case 3: 
        r = p; g = q; b = v;
        break;
      case 4:
        r = t; g = p; b = v;
        break;
      case 5:
        r = v; g = p; b = q;
        break;  
    }

    return { r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255) }
  }

  lerp = (a, b, t) => { return a * (1 - t) + b * t }
  clamp = (a, min, max) => { return Math.min(Math.max(a, min), max)}

  missingValues = (values, endX) => {
    let leftCooord, rightCoord
    if(Object.keys(values).length < endX + 1){
      let ret = {}
      for (let i = 0; i < endX; i++){
        if(values[i]){
          ret[i] = values[i]
        }
        else{
          leftCooord = [i - 1, ret[i - 1]]
          for(let j = i; j < endX; j++){
            if(values[j]){
              rightCoord = [j, values[j]]
              break;
            }
          }
          
          ret[i] = leftCooord[1] + ((rightCoord[1] - leftCooord[1]) / ( rightCoord[0] - leftCooord[0])) * (i - leftCooord[0])
        }        
      }
      return ret;
    }
    return values;
  }

  bezier = (start, control1, control2, end, lowBound = 0, highBound = 255) => {
    let controlPoints
    if(start[0] instanceof Array){
      controlPoints = start
      lowBound = control1
      highBound = control2
    }
    else{
      controlPoints = [start, control1, control2, end] 
    }

    if(controlPoints.length < 2){
      console.error('Invalid Number of Arguments to Bezier')      
      return false;
    }

    let bezier = {}    

    for (let i = 0; i <= 1000; i++){
      let t = i/1000
      let prev = controlPoints      
      while (prev.length > 1){
        var next = [];        
        for(let j = 0; j < prev.length - 2; j++){          
          next.push([
            this.lerp(prev[j][0], prev[j + 1][0], t), 
            this.lerp(prev[j][1], prev[j + 1][1], t)
          ]);          
        }        
        prev = next;    
      }
      console.log(prev);
      this.bezier[Math.round(prev[0][0])] = Math.round(this.clamp(prev[0][1], lowBound, highBound));
    }
    let endX = controlPoints[controlPoints.length - 1][0]
    bezier = this.missingValues(bezier, endX)
    bezier[endX] = bezier[endX] ? bezier[endX] : bezier[endX - 1]

    return bezier
  }
}