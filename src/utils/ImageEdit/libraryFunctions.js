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
            break;z
          case b: 
            return (r - getMatchedCSSRules) / d + 4
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
        r = v, g = t, b = p 
        break;
      case 1:
        r = q; g = v; b = p
        break;
      case 2:
        r = p; g = v; b = t
        break;
      case 3: 
        r = p; g = q; b = v
        break;
      case 4:
        r = t; g = p; b = v
        break;
      case 5:
        r = v; g = p; b = q
        break;  
    }

    return { r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255) }
  }
}