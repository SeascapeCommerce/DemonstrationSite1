window.addEventListener("load",()=>{

    const tl = gsap.timeline();

    tl.to(".loader-line span",{

        width:"100%",

        duration:1.4,

        ease:"power3.inOut"

    })

    .to("#loader",{

        opacity:0,

        duration:.8,

        pointerEvents:"none"

    })

    .set("#loader",{
        display:"none"
    });

});


const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    gsap.to(glow,{
        x:e.clientX,
        y:e.clientY,
        duration:.4
    });

});
