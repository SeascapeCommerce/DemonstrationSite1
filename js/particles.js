/* =========================================================
   SEASCAPE COMMERCE
   PARTICLE FIELD
   ========================================================= */


/* =========================================================
   01. PARTICLE FIELD REFERENCE
   ========================================================= */

const particleField =
    document.querySelector(".particle-field");

const particleWrapper =
    document.querySelector(".network-wrapper");


/* =========================================================
   02. SAFETY CHECK
   ========================================================= */

if (
    particleField &&
    particleWrapper
) {


    /* =====================================================
       03. PARTICLE CONFIGURATION
       ===================================================== */

    const particleCount = 80;

    const particles = [];


    /* =====================================================
       04. GET ACTUAL NETWORK DIMENSIONS
       ===================================================== */

    function getFieldDimensions() {

        return {

            width:
                particleWrapper.clientWidth,

            height:
                particleWrapper.clientHeight

        };

    }


    /* =====================================================
       05. CREATE PARTICLES
       ===================================================== */

    function createParticles() {

        /*
         * Remove any particles that may already exist.
         * Prevents duplicates if the script is initialized
         * more than once.
         */

        particleField.innerHTML = "";

        particles.length = 0;


        const dimensions =
            getFieldDimensions();


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement("div");


            particle.classList.add(
                "particle"
            );


            particleField.appendChild(
                particle
            );


            /*
             * Random starting position.
             */

            const startX =
                Math.random() *
                dimensions.width;


            const startY =
                Math.random() *
                dimensions.height;


            /*
             * Random movement range.
             */

            const moveX =
                gsap.utils.random(
                    -100,
                    100
                );


            const moveY =
                gsap.utils.random(
                    -100,
                    100
                );


            /*
             * Random size.
             */

            const size =
                gsap.utils.random(
                    1,
                    3
                );


            /*
             * Random opacity.
             */

            const opacity =
                gsap.utils.random(
                    0.25,
                    0.9
                );


            gsap.set(
                particle,
                {

                    x: startX,

                    y: startY,

                    width: size,

                    height: size,

                    opacity: opacity

                }
            );


            particles.push({

                element:
                    particle,

                x:
                    startX,

                y:
                    startY,

                moveX:
                    moveX,

                moveY:
                    moveY

            });


            /* =============================================
               PARTICLE FLOATING MOTION
               ============================================= */

            gsap.to(
                particle,
                {

                    x:
                        `+=${moveX}`,

                    y:
                        `+=${moveY}`,

                    duration:
                        gsap.utils.random(
                            10,
                            25
                        ),

                    repeat: -1,

                    yoyo: true,

                    ease:
                        "sine.inOut",

                    delay:
                        gsap.utils.random(
                            0,
                            8
                        )

                }
            );


            /* =============================================
               PARTICLE OPACITY PULSE
               ============================================= */

            gsap.to(
                particle,
                {

                    opacity:
                        gsap.utils.random(
                            0.15,
                            0.8
                        ),

                    duration:
                        gsap.utils.random(
                            2,
                            6
                        ),

                    repeat: -1,

                    yoyo: true,

                    ease:
                        "sine.inOut",

                    delay:
                        gsap.utils.random(
                            0,
                            5
                        )

                }
            );

        }

    }


    /* =====================================================
       06. INITIALIZE PARTICLES
       ===================================================== */

    createParticles();


    /* =====================================================
       07. PARTICLE RESPONSE TO MOUSE
       ===================================================== */

    let mouseX = 0;

    let mouseY = 0;


    particleWrapper.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                particleWrapper
                    .getBoundingClientRect();


            mouseX =
                event.clientX -
                rect.left;


            mouseY =
                event.clientY -
                rect.top;


            particles.forEach(
                particle => {

                    const element =
                        particle.element;


                    const particleX =
                        gsap.getProperty(
                            element,
                            "x"
                        );


                    const particleY =
                        gsap.getProperty(
                            element,
                            "y"
                        );


                    const dx =
                        mouseX -
                        particleX;


                    const dy =
                        mouseY -
                        particleY;


                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    /*
                     * Only affect particles
                     * reasonably close to cursor.
                     */

                    if (
                        distance < 180
                    ) {

                        const force =
                            (180 - distance) /
                            180;


                        gsap.to(
                            element,
                            {

                                x:
                                    particleX -
                                    dx *
                                    force *
                                    0.08,

                                y:
                                    particleY -
                                    dy *
                                    force *
                                    0.08,

                                duration:
                                    1.2,

                                ease:
                                    "power2.out",

                                overwrite:
                                    false

                            }
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       08. PARTICLE FIELD RESIZE
       ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        /*
                         * Rebuild particles using
                         * the new container dimensions.
                         */

                        createParticles();

                        ScrollTrigger.refresh();

                    },
                    250
                );

        }
    );


    /* =====================================================
       09. PARTICLE VISIBILITY
       ===================================================== */

    /*
     * Pause particle calculations when the tab
     * is not visible to reduce unnecessary work.
     */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                gsap.globalTimeline.pause();

            } else {

                gsap.globalTimeline.resume();

            }

        }
    );

}
