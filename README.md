Colour Converter
================

Convert colour codes of different types to each other. Supported types are hex, rgb, cymk, hsl and named colours.

Demo: http://spedwards.github.io/projects/colour

To call the function, use `convertColour(colourType, value)`.

Supported values are as follows:

 - cmyk
 - rgb
 - rgba
 - hex
 - hsl
 - websafe (named)

Note: All colour types are to be passed as lowercase. Example:


    > convertColour('hex', '#3c3c3c');
    {"rgb":"rgb(60,60,60)","rgba":"rgba(60,60,60,1)","hex":"#3c3c3c","hsl":"hsl(0,0,0.23529411764705882)","named":"undefined"}


    > convertColour('rgb', 'rgb(255,0,255)');
    {"rgb":"rgb(255,0,255)","rgba":"rgba(255,0,255,1)","hex":"#FF00FF","hsl":"hsl(0.8333333333333334,1,0.5)","named":["fuchsia","magenta"]}


    > convertColour('hex', '#0f0');
    {"rgb":"rgb(0,255,0)","rgba":"rgba(0,255,0,1)","hex":"#0f0","hsl":"hsl(0.3333333333333333,1,0.5)","named":["lime"]}
    
    
    > convertColour('websafe', 'green');
    {"rgb":"rgb(0,128,0)","rgba":"rgba(0,128,0,1)","hex":"#008000","hsl":"hsl(0.3333333333333333,1,0.25098039215686274)","named":"green"}
