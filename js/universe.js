const container =
document.getElementById("universe");

const scene =
new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
1,
3000
);

camera.position.z = 1000;

const renderer =
new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

container.appendChild(
renderer.domElement
);
