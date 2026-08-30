<script src="js/launch.js"></script>
/* =====================================================
   SEASCAPE COMMERCE
   LAUNCH SECTION
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        console.warn(
            "GSAP or ScrollTrigger is unavailable."
        );

        return;
    }


    gsap.registerPlugin(ScrollTrigger);


    const launch =
        document.querySelector(".launch-section");


    if (!launch) return;


    const title =
        launch.querySelector(".launch-title");


    const eyebrow =
        launch.querySelector(".launch-eyebrow");


    const description =
        launch.querySelector(".launch-description");


    const actions =
        launch.querySelector(".launch-actions");


    const orbitSystem =
        launch.querySelector(".launch-orbit-system");


    const grid =
        launch.querySelector(".launch-grid");


    const glows =
        launch.querySelectorAll(".launch-glow");


    /* =================================================
       INITIAL STATE
       ================================================= */

    gsap.set(
        [
            eyebrow,
            title,
            description,
            actions
        ],
        {
            opacity:0,
            y:80
        }
    );


    /* =================================================
       SCROLL REVEAL
       ================================================= */

    const reveal =
        gsap.timeline({

            scrollTrigger:{
                trigger:launch,
                start:"top 70%",
                once:true
            }

        });


    reveal
        .to(
            eyebrow,
            {
                opacity:1,
                y:0,
                duration:1,
                ease:"power4.out"
            }
        )

        .to(
            title,
            {
                opacity:1,
                y:0,
                duration:1.4,
                ease:"power4.out"
            },
            "-=.65"
        )

        .to(
            description,
            {
                opacity:1,
                y:0,
                duration:1,
                ease:"power3.out"
            },
            "-=.8"
        )

        .to(
            actions,
            {
                opacity:1,
                y:0,
                duration:.9,
                ease:"power3.out"
            },
            "-=.65"
        );


    /* =================================================
       GRID MOVEMENT
       ================================================= */

    gsap.to(
        grid,
        {
            backgroundPosition:"0 900px",
            duration:45,
            repeat:-1,
            ease:"none"
        }
    );


    /* =================================================
       ORBIT ROTATION
       ================================================= */

    gsap.to(
        ".launch-orbit-one",
        {
            rotation:360,
            duration:18,
            repeat:-1,
            ease:"none"
        }
    );


    gsap.to(
        ".launch-orbit-two",
        {
            rotation:-360,
            duration:30,
            repeat:-1,
            ease:"none"
        }
    );


    gsap.to(
        ".launch-orbit-three",
        {
            rotation:360,
            duration:45,
            repeat:-1,
            ease:"none"
        }
    );


    /* =================================================
       CORE BREATHING
       ================================================= */

    gsap.to(
        ".launch-core",
        {
            scale:1.12,
            duration:2.4,
            repeat:-1,
            yoyo:true,
            ease:"sine.inOut"
        }
    );


    gsap.to(
        ".launch-core-inner",
        {
            scale:1.35,
            opacity:.7,
            duration:1.8,
            repeat:-1,
            yoyo:true,
            ease:"sine.inOut"
        }
    );


    /* =================================================
       ATMOSPHERIC MOVEMENT
       ================================================= */

    gsap.to(
        glows,
        {
            x:"random(-80,80)",
            y:"random(-60,60)",
            scale:"random(.9,1.15)",
            duration:"random(8,14)",
            repeat:-1,
            yoyo:true,
            ease:"sine.inOut",
            stagger:.5
        }
    );


    /* =================================================
       MOUSE GRAVITY
       ================================================= */

    const pointer = {

        x:0,
        y:0

    };


    launch.addEventListener(
        "pointermove",
        event => {

            const rect =
                launch.getBoundingClientRect();


            pointer.x =
                (event.clientX - rect.left)
                / rect.width
                - .5;


            pointer.y =
                (event.clientY - rect.top)
                / rect.height
                - .5;


            gsap.to(
                orbitSystem,
                {
                    x:pointer.x * 35,
                    y:pointer.y * 25,
                    duration:1.2,
                    ease:"power3.out"
                }
            );


            gsap.to(
                title,
                {
                    x:pointer.x * -12,
                    duration:1.2,
                    ease:"power3.out"
                }
            );

        }
    );


    launch.addEventListener(
        "pointerleave",
        () => {

            gsap.to(
                orbitSystem,
                {
                    x:0,
                    y:0,
                    duration:1.5,
                    ease:"power3.out"
                }
            );


            gsap.to(
                title,
                {
                    x:0,
                    duration:1.5,
                    ease:"power3.out"
                }
            );

        }
    );


    /* =================================================
       PARALLAX ON SCROLL
       ================================================= */

    gsap.to(
        orbitSystem,
        {
            yPercent:18,

            scrollTrigger:{
                trigger:launch,
                start:"top bottom",
                end:"bottom top",
                scrub:1
            }

        }
    );


});
