var THREE = require("three");
var boilerplate = require("./boilerplate");
var scene = boilerplate.scene;
var camera = boilerplate.camera;
var renderer = boilerplate.renderer;

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
