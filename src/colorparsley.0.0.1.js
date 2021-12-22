///////////////////////////////////////////////////////////////////////////////
/** @preserve
/////    CoLoR PaRsLeY  🎨 🌿  a simple set of color parsing thingies!
/////           Beta 0.0.1    Revision date: Dec 14, 2021
/////
/////    Functions to parse color values and return array
/////    Copyright © 2019-2022 by Andrew Somers. All Rights Reserved.
/////    LICENSE: AGPL 3
/////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
/////    https://github.com/Myndex/colorparsley/
/////
///////////////////////////////////////////////////////////////////////////////
/////
/////    IMPORT:
/////    import { colorParsley } from 'colorparsley';
/////
/////    let rgbaArray = colorParsley('#abcdef');
// */
///////////////////////////////////////////////////////////////////////////////

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name colorparsley.0.0.1.min.js
// @code_url https://raw.githubusercontent.com/Myndex/colorparsley/master/src/colorparsley.0.0.1.js
// ==/ClosureCompiler==

// 

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
/////  BEGIN COLOR PARSLEY 0.0.1  BLOCK  \/////////////////////////////////////
////                                      \///////////////////////////////////
///                                        \/////////////////////////////////



/////  ƒ  colorParsley()  ///////////////////////////////////////////////////
//export
function colorParsley (colorIn) {

    if (typeof colorIn === 'string') {
        return parseString(colorIn);
    } else if (typeof colorIn === 'number') {
        return [(colorIn & 0xFF0000) >> 16,
                (colorIn & 0x00FF00) >> 8,
                (colorIn & 0x0000FF), 1.0];
    } else if (typeof colorIn === 'object') {
       if (Array.isArray(colorIn)) {
          return colorIn;
       } else {
          return [colorIn.r,
                  colorIn.g,
                  colorIn.b,
                  colorIn.a]; // warning: make sure obj has r: g: b: a:
       }
    };
    throw 'Err-1' // return error -1
};






/////  ƒ  parseString()  ///////////////////////////////////////////////////

function parseString (colorString = '#abcdef') {

                  // strip spaces, #, & common junk and make a clean string
    colorString = colorString.replace(/[\s `~!@$%^&*<>?{}:;"'+=_]/g,'');
    
    colorString = colorString.toLowerCase();   // set lowercase

///// CSS4 NAMED COLORS /////////////

      // See if name is matched and overwrite the input
  let namedColors = { aliceblue:'f0f8ff',antiquewhite:'faebd7',aqua:'00ffff',aquamarine:'7fffd4',azure:'f0ffff',beige:'f5f5dc',bisque:'ffe4c4',black:'000000',blanchedalmond:'ffebcd',blue:'0000ff',blueviolet:'8a2be2',brown:'a52a2a',burlywood:'deb887',cadetblue:'5f9ea0',chartreuse:'7fff00',chocolate:'d2691e',coral:'ff7f50',cornflowerblue:'6495ed',cornsilk:'fff8dc',crimson:'dc143c',cyan:'00ffff',darkblue:'00008b',darkcyan:'008b8b',darkgoldenrod:'b8860b',darkgray:'a9a9a9',darkgreen:'006400',darkgrey:'a9a9a9',darkkhaki:'bdb76b',darkmagenta:'8b008b',darkolivegreen:'556b2f',darkorange:'ff8c00',darkorchid:'9932cc',darkred:'8b0000',darksalmon:'e9967a',darkseagreen:'8fbc8f',darkslateblue:'483d8b',darkslategray:'2f4f4f',darkslategrey:'2f4f4f',darkturquoise:'00ced1',darkviolet:'9400d3',deeppink:'ff1493',deepskyblue:'00bfff',dimgray:'696969',dimgrey:'696969',dodgerblue:'1e90ff',firebrick:'b22222',floralwhite:'fffaf0',forestgreen:'228b22',fuchsia:'ff00ff',gainsboro:'dcdcdc',ghostwhite:'f8f8ff',gold:'ffd700',goldenrod:'daa520',gray:'808080',green:'008000',greenyellow:'adff2f',grey:'808080',honeydew:'f0fff0',hotpink:'ff69b4',indianred:'cd5c5c',indigo:'4b0082',ivory:'fffff0',khaki:'f0e68c',lavender:'e6e6fa',lavenderblush:'fff0f5',lawngreen:'7cfc00',lemonchiffon:'fffacd',lightblue:'add8e6',lightcoral:'f08080',lightcyan:'e0ffff',lightgoldenrodyellow:'fafad2',lightgray:'d3d3d3',lightgreen:'90ee90',lightgrey:'d3d3d3',lightpink:'ffb6c1',lightsalmon:'ffa07a',lightseagreen:'20b2aa',lightskyblue:'87cefa',lightslategray:'778899',lightslategrey:'778899',lightsteelblue:'b0c4de',lightyellow:'ffffe0',lime:'00ff00',limegreen:'32cd32',linen:'faf0e6',magenta:'ff00ff',maroon:'800000',mediumaquamarine:'66cdaa',mediumblue:'0000cd',mediumorchid:'ba55d3',mediumpurple:'9370db',mediumseagreen:'3cb371',mediumslateblue:'7b68ee',mediumspringgreen:'00fa9a',mediumturquoise:'48d1cc',mediumvioletred:'c71585',midnightblue:'191970',mintcream:'f5fffa',mistyrose:'ffe4e1',moccasin:'ffe4b5',navajowhite:'ffdead',navy:'000080',oldlace:'fdf5e6',olive:'808000',olivedrab:'6b8e23',orange:'ffa500',orangered:'ff4500',orchid:'da70d6',palegoldenrod:'eee8aa',palegreen:'98fb98',paleturquoise:'afeeee',palevioletred:'db7093',papayawhip:'ffefd5',peachpuff:'ffdab9',peru:'cd853f',pink:'ffc0cb',plum:'dda0dd',powderblue:'b0e0e6',purple:'800080',rebeccapurple:'663399',red:'ff0000',rosybrown:'bc8f8f',royalblue:'4169e1',saddlebrown:'8b4513',salmon:'fa8072',sandybrown:'f4a460',seagreen:'2e8b57',seashell:'fff5ee',sienna:'a0522d',silver:'c0c0c0',skyblue:'87ceeb',slateblue:'6a5acd',slategray:'708090',slategrey:'708090',snow:'fffafa',springgreen:'00ff7f',steelblue:'4682b4',tan:'d2b48c',teal:'008080',thistle:'d8bfd8',tomato:'ff6347',turquoise:'40e0d0',violet:'ee82ee',wheat:'f5deb3',white:'ffffff',whitesmoke:'f5f5f5',yellow:'ffff00',yellowgreen:'9acd32',gray1:'111111',gray2:'222222',gray3:'333333',gray4:'444444',gray5:'555555',gray6:'666666',gray7:'777777',gray8:'888888',gray9:'999999',graya:'aaaaaa',grayb:'bbbbbb',grayc:'cccccc',grayd:'dddddd',graye:'eeeeee',grey1:'111111',grey2:'222222',grey3:'333333',grey4:'444444',grey5:'555555',grey6:'666666',grey7:'777777',grey8:'888888',grey9:'999999',greya:'aaaaaa',greyb:'bbbbbb',greyc:'cccccc',greyd:'dddddd',greye:'eeeeee'};

    
    for (let key in namedColors) {
        if (colorString == key) {
            colorString = namedColors[key];
            break;
        }
    }

    // end of named colors section

    // ARRAY OF COLOR DEFINITION OBJECTS
    // objects with alpha are separated, and immediately
    // follow the non-alpha version. Float rgb is not added yet.
    
  let colorDefs = [
    {
      rex: /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i,
      parseStr: function (slices){ // rgb(0,0,0)
        return [
          parseInt(slices[1]),
          parseInt(slices[2]),
          parseInt(slices[3])
        ];
      }
    },
    {
      rex: /^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3})\),([01]?[0.1]\d{0,42})\)$/i,
      parseStr: function (slices){ // rgba(123,123,123,1.0)
        return [
          parseInt(slices[1]),
          parseInt(slices[2]),
          parseInt(slices[3]),
          parseInt(slices[4])
        ];
      }
    },
    {
      rex: /^([0-9|a-f])([0-9|a-f])([0-9|a-f])$/i,
      parseStr: function (slices){ // fff
        return [
          parseInt(slices[1]+slices[1],16),
          parseInt(slices[2]+slices[2],16),
          parseInt(slices[3]+slices[3],16)
        ];
      }
    },
    {
      rex: /^([0-9|a-f])([0-9|a-f])([0-9|a-f])([0-9|a-f])$/i,
      parseStr: function (slices){ // fffa
        return [
          parseInt(slices[1]+slices[1],16),
          parseInt(slices[2]+slices[2],16),
          parseInt(slices[3]+slices[3],16),
          parseInt(slices[4]+slices[4],16)
        ];
      }
    },
    {
      rex: /^([0-9|a-f]{2})([0-9|a-f]{2})([0-9|a-f]{2})$/i,
      parseStr: function (slices){ // ffffff
        return [
          parseInt(slices[1],16),
          parseInt(slices[2],16),
          parseInt(slices[3],16)
        ];
      }
    },
    {
      rex: /^([0-9|a-f]{2})([0-9|a-f]{2})([0-9|a-f]{2})([0-9|a-f]{2})$/i,
      parseStr: function (slices){ // ffffffaa
        return [
          parseInt(slices[1],16),
          parseInt(slices[2],16),
          parseInt(slices[3],16),
          parseInt(slices[4],16)
        ];
      }
    }
  ];

  // REGEX SEARCH CASCADE TO DETERMINE INPUT TYPE
  // NEW: Alpha Inputs and the new "2 Char Hex"
  // Which auto-makes grey based on the first
  // two characters typed. (f4 becomes f4f4f4)
  // this.r etc are type INT
  
  let colorDefLen = colorDefs.length;
  let rexInput, slicesInput;
  let r,g,b;
  let a = 1.0, i = 0;

    // Loop stops once valid color is found
  for (; i < colorDefLen; i++) {

    rexInput = colorDefs[i].rex;
    slicesInput = rexInput.exec(colorString);

    if (slicesInput) {
      let channel = colorDefs[i].parseStr(slicesInput);
      //  Shishado™ cleansing masks for that refreshing, clean feeling.
      r = channel[0] & 0xFF;
      g = channel[1] & 0xFF;
      b = channel[2] & 0xFF;
      a = (isNaN(channel[3])) ? 1.0 : Math.min(Math.max(channel[3],0.0),1.0);
      
      return [r,g,b,a];
    }
  }
    return colorString //false; // return false due to error
};

module.exports = { colorParsley };

///\                                      //////////////////////////////////////
////\                                    //////////////////////////////////////
/////\  END COLOR PARSLEY 0.0.1  BLOCK  //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
