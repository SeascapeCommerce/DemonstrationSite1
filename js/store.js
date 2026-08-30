/* =====================================================
   SEASCAPE COMMERCE
   STORE / COMMERCE SYSTEM
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


    const section =
        document.querySelector(".store-system");


    if (!section) return;


    const intro =
        section.querySelector(".store-intro");


    const experience =
        section.querySelector(".store-experience");


    const media =
        section.querySelector(".store-media-frame");


    const details =
        section.querySelector(".store-details");


    const capabilities =
        section.querySelectorAll(
            ".store-capability"
        );


    const cta =
        section.querySelector(".store-cta");


    /* =================================================
       INTRO REVEAL
       ================================================= */

    gsap.from(
        intro.children,
        {
            opacity:0,
            y:80,
            duration:1.2,
            stagger:.12,
            ease:"power4.out",

            scrollTrigger:{
                trigger:intro,
                start:"top 75%",
                once:true
            }

        }
    );


    /* =================================================
       FEATURED EXPERIENCE
       ================================================= */

    gsap.from(
        experience,
        {
            opacity:0,
            y:100,
            duration:1.3,
            ease:"power4.out",

            scrollTrigger:{
                trigger:experience,
                start:"top 75%",
                once:true
            }

        }
    );


    /* =================================================
       MEDIA PARALLAX
       ================================================= */

    gsap.to(
        media,
        {
            yPercent:-8,

            scrollTrigger:{
                trigger:experience,
                start:"top bottom",
                end:"bottom top",
                scrub:1
            }

        }
    );


    /* =================================================
       CAPABILITY REVEAL
       ================================================= */

    gsap.from(
        capabilities,
        {
            opacity:0,
            y:70,
            stagger:.12,
            duration:1,
            ease:"power3.out",

            scrollTrigger:{
                trigger:".store-capabilities",
                start:"top 75%",
                once:true
            }

        }
    );


    /* =================================================
       CAPABILITY HOVER
       ================================================= */

    capabilities.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                gsap.to(
                    card,
                    {
                        y:-8,
                        duration:.5,
                        ease:"power3.out"
                    }
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                gsap.to(
                    card,
                    {
                        y:0,
                        duration:.6,
                        ease:"power3.out"
                    }
                );

            }
        );

    });


    /* =================================================
       CTA REVEAL
       ================================================= */

    gsap.from(
        cta,
        {
            opacity:0,
            y:80,
            duration:1.2,
            ease:"power4.out",

            scrollTrigger:{
                trigger:cta,
                start:"top 80%",
                once:true
            }

        }
    );


    /* =================================================
       MOUSE PARALLAX
       ================================================= */

    section.addEventListener(
        "pointermove",
        event => {

            const rect =
                section.getBoundingClientRect();


            const x =
                (event.clientX - rect.left)
                / rect.width
                - .5;


            const y =
                (event.clientY - rect.top)
                / rect.height
                - .5;


            gsap.to(
                media,
                {
                    x:x * 12,
                    y:y * 8,
                    duration:1.2,
                    ease:"power3.out"
                }
            );

        }
    );


    section.addEventListener(
        "pointerleave",
        () => {

            gsap.to(
                media,
                {
                    x:0,
                    y:0,
                    duration:1.2,
                    ease:"power3.out"
                }
            );

        }
    );


});
