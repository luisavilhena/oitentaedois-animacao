// import * as THREE from 'three';

// var scene = new THREE.Scene( );
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// var renderer = new THREE.WebGLRenderer( );

// renderer.setSize( window.innerWidth, window.innerHeight);
// document.body.appendChild( renderer.domElement); 
// //game logic
// var update = function() {

// }
// //draw scene
// var render = function() {
//   renderer.render( scene, camera);
// }
// // run game loop
// var GameLoop = function() {
//   requestAnimationFrame( GameLoop)
//   update();
//   render();
// };

// GameLoop;
functionclass Scene {
  constructor() {
    this.container = document.getElementById('stage')

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.container,
      alpha: true,
    })

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    this.initLights()
  }

  initLights() {
    const ambientlight = new THREE.AmbientLight(0xffffff, 2)
    this.scene.add(ambientlight)
  }
  const perspective = 800

  constructor() {
    // ...
    this.initCamera()
  }

  initCamera() {
    const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

    this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000)
    this.camera.position.set(0, 0, perspective)
  }

  // const perspective = 800

  // constructor() {
  //   // ...
  //   this.initCamera()
  // }

  // initCamera() {
  //   const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

  //   this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000)
  //   this.camera.position.set(0, 0, perspective)
  // }
}
