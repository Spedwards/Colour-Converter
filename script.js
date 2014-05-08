String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

function convertColour(colourType,col) {
  var hex, c, rgb, rgba, cmyk, hsl, web, colours = {aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
  
  if (colourType == 'cmyk') {
    
    
    cmyk = col;
    c = col.slice(5).split(',');
    c[3] = c[3].substring(0, c[3].length - 1);
    
    /* START HEX */
    c = cmyk2hex(c[0],c[1],c[2],c[3]);
    hex = '#' + c.toUpperCase();
    /* END HEX */
    /* START NAMED */
    web = getKeys(colours,hex.toLowerCase());
    /* END NAMED */
    /* START RGB */
    c = c.substring(0,2) + ',' + c.substring(2);
    c = c.substring(0,5) + ',' + c.substring(5);
    c = c.split(',');
    
    for (i=0;i<3;i++) {
      c[i] = parseInt(c[i], 16);
    }
    rgb = 'rgb(' + c.join() + ')';
    /* END RGB */
    /* START RGBA */
    rgba = 'rgba(' + c.join() + ')';
    rgba = (rgba.substring(0, rgba.length - 1) + ',1)');
    /* END RGBA */
    /* START HSL */
    hsl = 'hsl(' + rgbToHsl(c[0], c[1], c[2]) + ')';
    /* END HSL */
    
    
    
  } else if (colourType == 'rgb') {
    
    
    rgb = col;
    
    c = col.slice(4).split(',');
    c[2] = c[2].substring(0, c[2].length - 1);
    
    /* START CMYK */
    cmyk = 'cmyk(' + rgb2cmyk(c[0], c[1], c[2]).join(',')  + ')';
    /* END CMYK */
    /* START HEX */
    
    hex = '#';
    for (i=0;i<3;i++) {
      c[i] = +c[i];
      hex += (c[i] < 16 ? "0" : "") + c[i].toString(16).toUpperCase();
    }
    /* END HEX */
    /* START NAMED */
    web = getKeys(colours,hex.toLowerCase());
    /* END NAMED */
    /* START RGBA */
    rgba = (col.substring(0, col.length - 1) + ',1)').splice(3,0,'a');
    /* END RGBA */
    /* START HSL */
    hsl = 'hsl(' + rgbToHsl(c[0], c[1], c[2]) + ')';
    /* END HSL */
    
  } else if (colourType == 'rgba') {
    
    
    rgba = col;
    
    c = col.slice(5).split(',');
    c.pop();
    
    /* START CMYK */
    cmyk = 'cmyk(' + rgb2cmyk(c[0], c[1], c[2]).join(',')  + ')';
    /* END CMYK */
    /* START RGB */
    rgb = 'rgb(' + c.join() + ')';
    /* END RGB */
    /* START HSL */
    hsl = 'hsl(' + rgbToHsl(c[0], c[1], c[2]) + ')';
    /* END HSL */
    /* START HEX */
    hex = '#';
    for (i=0;i<3;i++) {
      c[i] = +c[i];
      hex += (c[i] < 16 ? "0" : "") + c[i].toString(16).toUpperCase();
    }
    /* END HEX */
    /* START NAMED */
    web = getKeys(colours,hex.toLowerCase());
    /* END NAMED */
    
    
  } else if (colourType == 'hex') {
    
    
    c = col.split('#')[1];
    hex = col;
    /* START RGB */
    if (c.length == 3) {
      c = c.substring(0,1) + ',' + c.substring(1);
      c = c.substring(0,3) + ',' + c.substring(3);
      c = c.split(',');
      for (i=0;i<c.length;i++) {
        c[i] += c[i];
      }
    } else if (c.length == 6) {
      c = c.substring(0,2) + ',' + c.substring(2);
      c = c.substring(0,5) + ',' + c.substring(5);
      c = c.split(',');
    }
    /* START NAMED */
    web = getKeys(colours,'#'+c.join('').toLowerCase());
    /* END NAMED */
    
    for (i=0;i<3;i++) {
      c[i] = parseInt(c[i], 16);
    }
    rgb = 'rgb(' + c.join() + ')';
    /* END RGB */
    /* START CMYK */
    cmyk = 'cmyk(' + rgb2cmyk(c[0], c[1], c[2]).join(',')  + ')';
    /* END CMYK */
    /* START RGBA */
    rgba = 'rgba(' + c.join() + ')';
    rgba = (rgba.substring(0, rgba.length - 1) + ',1)');
    /* END RGBA */
    /* START HSL */
    hsl = 'hsl(' + rgbToHsl(c[0], c[1], c[2]) + ')';
    /* END HSL */
    
    
  } else if (colourType == 'hsl') {
    
    
    hsl = col;console.debug(hsl = col);
    
    /* START RGB */
    c = col.slice(4).split(',');
    c[2] = c[2].substring(0, c[2].length - 1);
    c = hslToRgb(c[0],c[1],c[2]);
    
    rgb = 'rgb(' + c.join() + ')';
    /* END RGB */
    /* START CMYK */
    cmyk = 'cmyk(' + rgb2cmyk(c[0], c[1], c[2]).join(',')  + ')';
    /* END CMYK */
    /* START RGBA */
    rgba = (rgb.substring(0, rgb.length - 1) + ',1)').splice(3,0,'a');
    /* END RGBA */
    /* START HEX */
    hex = '#';
    for (i=0;i<3;i++) {
      c[i] = +c[i];
      hex += (c[i] < 16 ? "0" : "") + c[i].toString(16).toUpperCase();
    }
    /* END HEX */
    /* START NAMED */
    web = getKeys(colours,hex.toLowerCase());
    /* END NAMED */

    
  } else if (colourType == 'websafe') {
    web = col;
    hex = colours[col].toUpperCase();
    c = hex.split('#')[1];
    /* START RGB */
    if (c.length == 3) {
      c = c.substring(0,1) + ',' + c.substring(1);
      c = c.substring(0,3) + ',' + c.substring(3);
      c = c.split(',');
      for (i=0;i<c.length;i++) {
        c[i] += c[i];
      }
    } else if (c.length == 6) {
      c = c.substring(0,2) + ',' + c.substring(2);
      c = c.substring(0,5) + ',' + c.substring(5);
      c = c.split(',');
    }
    
    for (i=0;i<3;i++) {
      c[i] = parseInt(c[i], 16);
    }
    rgb = 'rgb(' + c.join() + ')';
    /* END RGB */
    /* START CMYK */
    cmyk = 'cmyk(' + rgb2cmyk(c[0], c[1], c[2]).join(',')  + ')';
    /* END CMYK */
    /* START RGBA */
    rgba = 'rgba(' + c.join() + ')';
    rgba = (rgba.substring(0, rgba.length - 1) + ',1)');
    /* END RGBA */
    /* START HSL */
    hsl = 'hsl(' + rgbToHsl(c[0], c[1], c[2]) + ')';
    /* END HSL */
  }
  
  return '<b>CMYK: </b>' + cmyk + '<br/><b>RGB: </b>' + rgb + '<br/><b>RGBA: </b>' + rgba + '<br/><b>HEX: </b>' + hex + '<br/><b>HSL: </b>' + hsl + '<br/><b>Named: </b>' + web + '<br/><b>Sample: </b><div style="background-color:'+rgba+';height:1.5em;width:150px;border:1px solid black"></div>';
}






/* BEGIN FUNCTIONS */





function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}
function rgb2cmyk (r,g,b) {
 var computedC = 0;
 var computedM = 0;
 var computedY = 0;
 var computedK = 0;

 //remove spaces from input RGB values, convert to int
 var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
 var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
 var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

 if ( r==null || g==null || b==null ||
     isNaN(r) || isNaN(g)|| isNaN(b) )
 {
   alert ('Please enter numeric RGB values!');
   return;
 }
 if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
   alert ('RGB values must be in the range 0 to 255.');
   return;
 }

 // BLACK
 if (r==0 && g==0 && b==0) {
  computedK = 1;
  return [0,0,0,1];
 }

 computedC = 1 - (r/255);
 computedM = 1 - (g/255);
 computedY = 1 - (b/255);

 var minCMY = Math.min(computedC,
              Math.min(computedM,computedY));
 computedC = (computedC - minCMY) / (1 - minCMY) ;
 computedM = (computedM - minCMY) / (1 - minCMY) ;
 computedY = (computedY - minCMY) / (1 - minCMY) ;
 computedK = minCMY;

 return [computedC,computedM,computedY,computedK];
}
function cmyk2hex(c,m,y,k) {

    function padZero(str) {
        return "000000".substr(str.length)+str;
    }

    var cyan = (c * 255 * (1-k)) << 16;
    var magenta = (m * 255 * (1-k)) << 8;
    var yellow = (y * 255 * (1-k)) >> 0;

    var black = 255 * (1-k);
    var white = black | black << 8 | black << 16;

    var color = white - (cyan | magenta | yellow );

    return color.toString(16);
}
function colourNameToHex(colour) {
    if (typeof colours[colour.toLowerCase()] != 'undefined')
    	return colours[colour.toLowerCase()];

    return 'undefined';
}
function getKeys(obj, val){
  var a = [];
  for(var i in obj){
    if(obj[i] === val){
      a.push(i);
    }
  }
  if(a.length > 0){
    return a;
  }
  return 'undefined';
}