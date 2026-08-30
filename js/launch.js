/* =====================================================
   SEASCAPE — LAUNCH SYSTEM
   ===================================================== */

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   INITIAL STATE
   ===================================================== */

gsap.set(
    [
        ".launch-label",
        ".launch-title",
        ".launch-description",
        ".launch-actions",
        ".launch-meta"
    ],
    {
        opacity:0,
        y:60
    }
);


/* =====================================================
   ENTRANCE ANIMATION
   ===================================================== */

const launchTimeline = gsap.timeline({

    scrollTrigger:{
        trigger:".launch-section",
        start:"top 75%",
        once:true
    }

});


launchTimeline
    .to(".launch-label",{

        opacity:1,
        y:0,

        duration:.8,

        ease:"power3.out"

    })

    .to(".launch-title",{

        opacity:1,
        y:0,

        duration:1.2,

        ease:"power4.out"

    },"-=.45")

    .to(".launch-description",{

        opacity:1,
        y:0,

        duration:.9,

        ease:"power3.out"

    },"-=.65")

    .to(".launch-actions",{

        opacity:1,
        y:0,

        duration:.8,

        ease:"power3.out"

    },"-=.5")

    .to(".launch-meta",{

        opacity:1,
        y:0,

        duration:.7,

        ease:"power3.out"

    },"-=.4");


/* =====================================================
   ORBIT ROTATION
   ===================================================== */

gsap.to(".launch-orbit-1",{

    rotation:360,

    duration:30,

    repeat:-1,

    ease:"none"

});


gsap.to(".launch-orbit-2",{

    rotation:-360,

    duration:45,

    repeat:-1,

    ease:"none"

});


gsap.to(".launch-orbit-3",{

    rotation:360,

    duration:70,

    repeat:-1,

    ease:"none"

});


/* =====================================================
   CORE BREATHING
   ===================================================== */

gsap.to(".launch-core",{

    scale:1.35,

    duration:2.5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


gsap.to(".launch-core-inner",{

    scale:1.25,

    opacity:.55,

    duration:2.5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


/* =====================================================
   GRID MOTION
   ===================================================== */

gsap.to(".launch-grid",{

    backgroundPosition:
        "0 800px",

    duration:70,

    repeat:-1,

    ease:"none"

});


/* =====================================================
   FLOATING GLOWS
   ===================================================== */

gsap.to(".launch-glow-a",{

    x:100,
    y:-80,

    duration:12,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


gsap.to(".launch-glow-b",{

    x:-120,
    y:70,

    duration:15,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});


/* =====================================================
   MOUSE GRAVITY
   ===================================================== */

const launchSection =
    document.querySelector(".launch-section");

const launchSystem =
    document.querySelector(".launch-orbit-system");


if(launchSection && launchSystem){

    launchSection.addEventListener(
        "mousemove",
        (event)=>{

            const rect =
                launchSection.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            gsap.to(
                launchSystem,
                {
                    x:
                        `calc(-50% + ${x * .015}px)`,

                    y:
                        `calc(-50% + ${y * .015}px)`,

                    duration:1.2,

                    ease:"power3.out"

                }
            );


            gsap.to(
                ".launch-content",
                {
                    x:x * -.006,
                    y:y * -.006,

                    duration:1.4,

                    ease:"power3.out"

                }
            );

        }
    );

}
