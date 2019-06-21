/* global AFRAME, THREE */

const glsl = require('glslify');
const vertexShader = glsl.file('../shaders/vertex.glsl');
const fragmentShader = glsl.file('../shaders/fragment.glsl');
let uniforms;

AFRAME.registerComponent('material-rgb-offset', {
   schema: {
    texture: {type: 'string' },
    offset: {type: 'float'}
  },
  init: function () {
    var texture = new THREE.TextureLoader().load( this.data.texture );
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;

    this.material  = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        offset: { type: 'f', value: 0. },
        texture: { type: 't', value: texture },
        myval: { type: 'f', value: incoming }
      },
      vertexShader,
      fragmentShader
    });

    this.el.addEventListener('model-loaded', () => this.update());
  },


  /**
   * Apply the material to the current entity.
   */
  update: function () {


    // var texture = new THREE.TextureLoader().load( this.data.texture );
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;

    // this.material.uniforms.texture.texture = texture;


    const mesh = this.el.getObject3D('mesh');
    if (mesh) {
      mesh.material = this.material;
      // mesh.material.uniforms.texture.value = texture;
    }
  },

  /**
   * On each frame, update the 'time' uniform in the shaders.
   */
  tick: function (t) {
    this.material.needsUpdate = true;
    this.material.uniforms.time.value = (t / 1000) % 1;
    this.material.uniforms.offset.value = this.data.offset;
    this.material.uniforms.myval.value = incoming;
    console.log(this.material.uniforms.myval.value);
  }

})



function randomizeOffset (id) {
  let element = document.querySelector("#plane"+id);
  if( element != undefined ){
    // console.log("working?")
   element.setAttribute("material-rgb-offset", "offset:"+".01"+";");
  }
}
