var THREE = require("three");

var width = window.innerWidth;
var height = window.innerHeight;
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
document.body.appendChild(renderer.domElement);
var resize = function() {
  renderer.setSize( window.innerWidth, window.innerHeight )
  renderer.domElement.width = window.innerWidth;
  renderer.domElement.height = window.innerHeight;
  camera.aspect = window.innerWidth / window.innerHeight;
}
resize();
window.addEventListener("resize", resize)
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 1000 );
scene.add( camera );
camera.position.z = 5;
;
var callbacks = [];

var animate = function() {
  for (var i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

exports.scene = scene;
exports.camera = camera;
exports.renderer = renderer;
exports.addCallback = function(cb) {
  callbacks.push(cb);
}
