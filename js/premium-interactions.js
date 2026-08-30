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



document.querySelectorAll(
".cta,.industry-item,.terminal-submit"
).forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect =
        button.getBoundingClientRect();

        const x =
        e.clientX -
        rect.left -
        rect.width/2;

        const y =
        e.clientY -
        rect.top -
        rect.height/2;

        gsap.to(button,{
            x:x*.15,
            y:y*.15,
            duration:.4
        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{
            x:0,
            y:0,
            duration:.5
        });

    });

});


gsap.to(".core::after");
