console.log('Hello')
let scene, renderer, cameras, camera, helper;
const joy = new Joystick('body')

init();

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00aaff);
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width/height;
  clock = new THREE.Clock();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
geometry.translate( 0, 0.5, 0 );
const material = new THREE.MeshStandardMaterial({color: new THREE.Color('grey')});

for ( let i = 0; i < 500; i ++ ) {

        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = Math.random() * 500 - 1;
        mesh.position.y = 0;
        mesh.position.z = Math.random() * 500 - 1;
        mesh.scale.x = Math.random() * 10 + 2;;
        mesh.scale.y = Math.random() * 30 + 5;
        mesh.scale.z = 5;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        scene.add( mesh );

}
// floor--------------------------
const floorGeometry = new THREE.PlaneGeometry( 500, 500 );
const floorMaterial = new THREE.MeshStandardMaterial( {
    color: 0xeeeeee,
    roughness: 1.0,
    metalness: 0.0
} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.rotation.x = - Math.PI / 2;
floor.receiveShadow = true;
scene.add( floor );
floor.position.y = -0.6;

//Grid
const grid = new THREE.GridHelper(500,10)
scene.add(grid)
grid.position.y = -0.6




  
  
  
  camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.set(100, 40, 200);
  camera.lookAt(0, -5, 0)
  scene.add(camera)
  
  const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
  scene.add(ambient);
  
  const light = new THREE.DirectionalLight(0xFFFFFF, 2);
  light.position.set( 0, 1, 10);
  light.rotation.y = 1;
  scene.add(light);
  
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// const controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls.target.set(1,2,0);
// controls.update();

  window.addEventListener( 'resize', resize, false);
  
  update()
}



function update(){
    requestAnimationFrame( update );
      renderer.render( scene, camera );
    const dt = clock.getDelta();
    camera.position.x += joy.get().x/5
    camera.position.z += joy.get().y/5

    // camera.rotation.y += joy.get().x/100
    // if(joy.get().x > 0 ){
    //     console.log()
    // }
  }
  
  function resize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }



// setInterval(()=>{
//     console.log(joy.get())
// }, 500)
// c = new Date().getTime() * (Math.random()*200+2)
// console.log(Math.floor(c))