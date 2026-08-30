/* =========================================================
   SEASCAPE COMMERCE
   MISSION CONTROL
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   01. DOM REFERENCES
   ========================================================= */

const missionSection =
    document.querySelector(".mission-control");

const missionContainer =
    document.querySelector(".mission-container");

const missionStages =
    gsap.utils.toArray(".mission-stage");

const missionOrbits =
    gsap.utils.toArray(".orbit");


/* =========================================================
   02. SAFETY CHECK
   ========================================================= */

if (
    missionSection &&
    missionContainer &&
    missionStages.length
) {


    /* =====================================================
       03. INITIAL STATE
       ===================================================== */

    gsap.set(
        missionStages,
        {
            opacity: 0,
            y: 80
        }
    );


    /*
     * The first stage starts visible.
     */

    gsap.set(
        missionStages[0],
        {
            opacity: 1,
            y: 0
        }
    );


    /* =====================================================
       04. MISSION CONTROL MASTER TIMELINE
       
       The Mission Control section is 500vh tall.
       Each of the five stages occupies approximately
       one-fifth of the scrolling experience.
       ===================================================== */

    const missionTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger:
                    missionSection,

                start:
                    "top top",

                end:
                    "bottom bottom",

                scrub:
                    1,

                /*
                 * The CSS sticky container handles
                 * the visual pinning.
                 */

                invalidateOnRefresh:
                    true

            }

        });


    /* =====================================================
       05. BUILD STAGE TRANSITIONS
       ===================================================== */

    missionStages.forEach(
        (stage, index) => {

            /*
             * First stage is already visible.
             */

            if (index === 0) {

                missionTimeline.to(
                    stage,
                    {

                        opacity: 1,

                        y: 0,

                        duration: 0.15,

                        ease: "power2.out"

                    }
                );

            }


            /*
             * Hold the current stage before
             * transitioning to the next.
             */

            missionTimeline.to(
                {},
                {
                    duration: 0.35
                }
            );


            /*
             * Fade the current stage upward.
             */

            missionTimeline.to(
                stage,
                {

                    opacity: 0,

                    y: -60,

                    duration: 0.15,

                    ease: "power2.in"

                }
            );


            /*
             * Bring the next stage into view.
             */

            if (
                missionStages[index + 1]
            ) {

                missionTimeline.to(
                    missionStages[index + 1],
                    {

                        opacity: 1,

                        y: 0,

                        duration: 0.15,

                        ease: "power2.out"

                    }
                );

            }

        }
    );


    /* =====================================================
       06. MISSION ORBIT ROTATION
       ===================================================== */

    if (
        missionOrbits.length
    ) {

        gsap.to(
            ".orbit-1",
            {

                rotation: 360,

                duration: 20,

                repeat: -1,

                ease: "none"

            }
        );


        gsap.to(
            ".orbit-2",
            {

                rotation: -360,

                duration: 40,

                repeat: -1,

                ease: "none"

            }
        );


        gsap.to(
            ".orbit-3",
            {

                rotation: 360,

                duration: 60,

                repeat: -1,

                ease: "none"

            }
        );

    }


    /* =====================================================
       07. MISSION CORE BREATHING
       ===================================================== */

    const missionCore =
        document.querySelector(
            ".mission-control .center-core"
        );


    if (
        missionCore
    ) {

        gsap.to(
            missionCore,
            {

                scale: 1.18,

                duration: 2,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            }
        );

    }


    /* =====================================================
       08. CORE GLOW ANIMATION
       ===================================================== */

    const missionGlow =
        document.querySelector(
            ".mission-control .core-glow"
        );


    if (
        missionGlow
    ) {

        gsap.to(
            missionGlow,
            {

                scale: 1.15,

                opacity: 0.65,

                duration: 2.5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            }
        );

    }


    /* =====================================================
       09. MISSION CIRCLE PARALLAX
       ===================================================== */

    const missionCircle =
        document.querySelector(
            ".mission-control .mission-circle"
        );


    if (
        missionCircle
    ) {

        gsap.to(
            missionCircle,
            {

                y: -25,

                rotation: 2,

                ease: "none",

                scrollTrigger: {

                    trigger:
                        missionSection,

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        1

                }

            }
        );

    }


    /* =====================================================
       10. STAGE NUMBER / TEXT REVEAL
       ===================================================== */

    missionStages.forEach(
        stage => {

            const number =
                stage.querySelector(
                    ".mission-number"
                );

            const heading =
                stage.querySelector("h2");

            const paragraph =
                stage.querySelector("p");


            /*
             * Set children up for subtle
             * independent motion.
             */

            gsap.set(
                [
                    number,
                    heading,
                    paragraph
                ].filter(Boolean),
                {
                    opacity: 1
                }
            );

        }
    );


    /* =====================================================
       11. MISSION SECTION INTRO
       ===================================================== */

    gsap.from(
        missionContainer,
        {

            opacity: 0,

            duration: 1.2,

            ease: "power2.out",

            scrollTrigger: {

                trigger:
                    missionSection,

                start:
                    "top 80%",

                once:
                    true

            }

        }
    );


    /* =====================================================
       12. SCROLLTRIGGER REFRESH
       ===================================================== */

    window.addEventListener(
        "load",
        () => {

            ScrollTrigger.refresh();

        }
    );

}
