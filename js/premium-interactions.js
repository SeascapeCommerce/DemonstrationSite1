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
