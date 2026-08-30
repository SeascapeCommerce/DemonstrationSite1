/* =========================================================
   SEASCAPE COMMERCE
   GLOBAL ANIMATION CONTROLLER
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   01. GLOBAL DOM REFERENCES
   ========================================================= */

const hero =
    document.querySelector(".hero");

const heroContent =
    document.querySelector(".hero-content");

const heroVideo =
    document.querySelector(".hero video");

const starfield =
    document.querySelector(".starfield");

const cta =
    document.querySelector(".cta");


/* =========================================================
   02. HERO INTRO ANIMATION
   ========================================================= */

if (
    heroContent
) {

    const heroElements =
        heroContent.querySelectorAll(
            ".eyebrow, .headline, .subhead, .cta"
        );


    gsap.set(
        heroElements,
        {
            opacity: 0,
            y: 40
        }
    );


    gsap.to(
        heroElements,
        {

            opacity: 1,

            y: 0,

            duration: 1.2,

            stagger: 0.12,

            ease: "power3.out",

            delay: 0.25

        }
    );

}


/* =========================================================
   03. HERO VIDEO MOTION
   ========================================================= */

if (
    heroVideo
) {

    gsap.to(
        heroVideo,
        {

            scale: 1.06,

            duration: 20,

            ease: "none",

            repeat: -1,

            yoyo: true

        }
    );

}


/* =========================================================
   04. HERO PARALLAX
   ========================================================= */

if (
    hero
) {

    gsap.to(
        heroVideo,
        {

            yPercent: 12,

            ease: "none",

            scrollTrigger: {

                trigger:
                    hero,

                start:
                    "top top",

                end:
                    "bottom top",

                scrub:
                    1

            }

        }
    );

}


/* =========================================================
   05. STARFIELD MOTION
   ========================================================= */

if (
    starfield
) {

    gsap.to(
        starfield,
        {

            backgroundPosition:
                "0 500px",

            duration:
                60,

            repeat:
                -1,

            ease:
                "none"

        }
    );


    /*
     * Subtle opacity breathing.
     */

    gsap.to(
        starfield,
        {

            opacity: 0.55,

            duration: 5,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        }
    );

}


/* =========================================================
   06. CTA HOVER MOTION
   ========================================================= */

if (
    cta
) {

    cta.addEventListener(
        "mouseenter",
        () => {

            gsap.to(
                cta,
                {

                    y: -4,

                    scale: 1.03,

                    duration: 0.3,

                    ease: "power2.out",

                    overwrite: "auto"

                }
            );

        }
    );


    cta.addEventListener(
        "mouseleave",
        () => {

            gsap.to(
                cta,
                {

                    y: 0,

                    scale: 1,

                    duration: 0.3,

                    ease: "power2.out",

                    overwrite: "auto"

                }
            );

        }
    );

}


/* =========================================================
   07. SECTION REVEAL SYSTEM
   ========================================================= */

const revealSections =
    gsap.utils.toArray(
        ".store, .contact"
    );


revealSections.forEach(
    section => {

        gsap.from(
            section,
            {

                opacity: 0,

                y: 60,

                duration: 1,

                ease: "power3.out",

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top 85%",

                    once:
                        true

                }

            }
        );

    }
);


/* =========================================================
   08. NAVIGATION FADE ON SCROLL
   ========================================================= */

const navbar =
    document.querySelector(".navbar");


if (
    navbar
) {

    ScrollTrigger.create({

        start: "top -80",

        end: 99999,

        onUpdate: self => {

            if (
                self.direction === 1
            ) {

                gsap.to(
                    navbar,
                    {

                        backgroundColor:
                            "rgba(5,5,5,0.65)",

                        duration:
                            0.3,

                        overwrite:
                            "auto"

                    }
                );

            } else {

                gsap.to(
                    navbar,
                    {

                        backgroundColor:
                            "rgba(5,5,5,0.2)",

                        duration:
                            0.3,

                        overwrite:
                            "auto"

                    }
                );

            }

        }

    });

}


/* =========================================================
   09. GLOBAL SCROLL REFRESH
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        ScrollTrigger.refresh();

    }
);
