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


const starGeometry =
new THREE.BufferGeometry();

const starCount = 3000;

const positions =
new Float32Array(starCount * 3);

for(let i=0;i<starCount*3;i++){

    positions[i] =
    (Math.random()-.5)*2500;

}

starGeometry.setAttribute(
"position",
new THREE.BufferAttribute(
positions,
3
)
);

const starMaterial =
new THREE.PointsMaterial({

    color:0xffffff,

    size:2,

    transparent:true,

    opacity:.8

});

const stars =
new THREE.Points(
starGeometry,
starMaterial
);

scene.add(stars);

const nodeGroup =
new THREE.Group();

scene.add(nodeGroup);

for(let i=0;i<20;i++){

    const sphere =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            5,
            16,
            16
        ),

        new THREE.MeshBasicMaterial({

            color:0x4cc9ff

        })

    );

    sphere.position.set(

        (Math.random()-.5)*900,

        (Math.random()-.5)*900,

        (Math.random()-.5)*900

    );

    nodeGroup.add(
        sphere
    );

}


let mouseX = 0;
let mouseY = 0;

window.addEventListener(
"mousemove",
e=>{

    mouseX =
    (e.clientX/window.innerWidth-.5);

    mouseY =
    (e.clientY/window.innerHeight-.5);

});

function animate(){

    requestAnimationFrame(
        animate
    );

    stars.rotation.y += .00008;

    nodeGroup.rotation.y += .0005;

    camera.position.x +=
    (mouseX*80-camera.position.x)*.03;

    camera.position.y +=
    (-mouseY*80-camera.position.y)*.03;

    camera.lookAt(
        scene.position
    );

    renderer.render(
        scene,
        camera
    );

}

animate();


window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
