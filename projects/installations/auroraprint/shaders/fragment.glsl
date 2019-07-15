varying vec2 vUv;

uniform sampler2D texture;
uniform float time;
uniform float offset;
uniform float myval;




void main() {

  vec4 redOffset = texture2D( texture, vec2( vUv.x  + (myval * 1.5 * sin(vUv.x * 4.)), vUv.y + myval) );
  vec4 greenOffset = texture2D( texture, vec2( vUv.x  + (myval * 1. * sin(vUv.x * 3.)), vUv.y + myval) );
  vec4 blueOffset = texture2D( texture, vec2( vUv.x  + (myval * 2. * sin(vUv.x * 2. )), vUv.y + myval) );
  //vec4 color2 = texture2D( texture, vec2( vUv.x, vUv.y ) );

  gl_FragColor = vec4( redOffset.r, greenOffset.g, blueOffset.b, .8 );





}
