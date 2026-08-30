/* =========================================================
   SEASCAPE COMMERCE
   AI AGENT CONSTELLATION
   Spatial / Cinematic Network System
   ========================================================= */

(() => {

    "use strict";

    /* -----------------------------------------------------
       DEPENDENCIES
       ----------------------------------------------------- */

    if (typeof gsap === "undefined") {
        console.warn("Seascape: GSAP is required.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* -----------------------------------------------------
       ELEMENTS
       ----------------------------------------------------- */

    const section =
        document.querySelector(".agent-network");

    const wrapper =
        document.querySelector(".network-wrapper");

    const core =
        document.querySelector(".agent.core");

    const agents =
        gsap.utils.toArray(".agent");

    const beams =
        gsap.utils.toArray(".beam");

    const particleField =
        document.querySelector(".particle-field");

    const grid =
        document.querySelector(".tech-grid");

    const title =
        document.getElementById("agentTitle");

    const description =
        document.getElementById("agentDescription");


    if (!section || !wrapper) {
        return;
    }


    /* -----------------------------------------------------
       ACCESSIBILITY
       ----------------------------------------------------- */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    const finePointer =
        window.matchMedia(
            "(pointer:fine)"
        ).matches;


    /* -----------------------------------------------------
       AGENT DATA
       ----------------------------------------------------- */

    const agentData = {

        discovery: {
            title: "Discovery Agent",
            desc:
                "Researches markets, audiences, competitors, and growth opportunities."
        },

        marketing: {
            title: "Marketing Agent",
            desc:
                "Creates campaigns, messaging strategies, content, and customer acquisition systems."
        },

        store: {
            title: "Store Agent",
            desc:
                "Optimizes storefront architecture, navigation, products, and conversion paths."
        },

        support: {
            title: "Support Agent",
            desc:
                "Handles customer interactions, FAQs, ticket routing, and retention workflows."
        },

        analytics: {
            title: "Analytics Agent",
            desc:
                "Measures performance, identifies opportunities, and delivers actionable insights."
        },

        visual: {
            title: "Visual Agent",
            desc:
                "Generates imagery, branding assets, product visuals, and creative concepts."
        }

    };


    /* -----------------------------------------------------
       AGENT HELPERS
       ----------------------------------------------------- */

    function getAgentKey(agent) {

        if (!agent) return null;

        return Object.keys(agentData).find(
            key => agent.classList.contains(key)
        ) || null;

    }


    function getBeam(key) {

        return document.getElementById(
            `beam-${key}`
        );

    }


    /* -----------------------------------------------------
       INITIAL CSS VARIABLES
       ----------------------------------------------------- */

    agents.forEach(agent => {

        gsap.set(agent, {

            "--motion-x": "0px",
            "--motion-y": "0px",
            "--mouse-x": "0px",
            "--mouse-y": "0px",
            "--depth-scale": 1

        });

    });


    /* -----------------------------------------------------
       INFORMATION PANEL
       ----------------------------------------------------- */

    let infoAnimation;

    function updateInformation(key) {

        if (!key || !agentData[key]) {
            return;
        }

        const data =
            agentData[key];


        if (infoAnimation) {
            infoAnimation.kill();
        }


        infoAnimation =
            gsap.timeline();


        if (title) {

            infoAnimation.to(title, {

                opacity: 0,
                y: 10,

                duration: 0.2,

                ease: "power2.out",

                onComplete: () => {

                    title.textContent =
                        data.title;

                }

            });


            infoAnimation.to(title, {

                opacity: 1,
                y: 0,

                duration: 0.45,

                ease: "power3.out"

            });

        }


        if (description) {

            infoAnimation.to(description, {

                opacity: 0,
                y: 10,

                duration: 0.2,

                ease: "power2.out",

                onComplete: () => {

                    description.textContent =
                        data.desc;

                }

            }, "<");


            infoAnimation.to(description, {

                opacity: 1,
                y: 0,

                duration: 0.45,

                ease: "power3.out"

            });

        }

    }


    /* -----------------------------------------------------
       ACTIVE AGENT
       ----------------------------------------------------- */

    function activateAgent(agent) {

        if (!agent || agent === core) {
            return;
        }

        const key =
            getAgentKey(agent);

        if (!key) {
            return;
        }


        updateInformation(key);


        agents.forEach(node => {

            if (node === core) {
                return;
            }

            node.classList.remove(
                "is-active"
            );

            gsap.to(node, {

                "--depth-scale": 0.96,

                duration: 0.5,

                ease: "power3.out"

            });

        });


        agent.classList.add(
            "is-active"
        );


        gsap.to(agent, {

            "--depth-scale": 1.08,

            duration: 0.6,

            ease: "power3.out"

        });


        /* ---------------------------------------------
           Beam activation
           --------------------------------------------- */

        const activeBeam =
            getBeam(key);


        beams.forEach(beam => {

            gsap.to(beam, {

                opacity:
                    beam === activeBeam
                        ? 1
                        : 0.18,

                stroke:
                    beam === activeBeam
                        ? "rgba(76,201,255,.95)"
                        : "rgba(255,255,255,.15)",

                strokeWidth:
                    beam === activeBeam
                        ? 2.5
                        : 1.5,

                duration: 0.45,

                ease: "power2.out"

            });

        });


        /* ---------------------------------------------
           Energy pulse through active beam
           --------------------------------------------- */

        if (activeBeam && !reducedMotion) {

            gsap.killTweensOf(
                activeBeam,
                "strokeDashoffset"
            );


            gsap.fromTo(

                activeBeam,

                {
                    strokeDasharray:
                        "4 18",

                    strokeDashoffset:
                        160

                },

                {
                    strokeDashoffset:
                        -160,

                    duration:
                        1.8,

                    repeat:
                        2,

                    ease:
                        "none"

                }

            );

        }

    }


    /* -----------------------------------------------------
       RESET AGENT NETWORK
       ----------------------------------------------------- */

    function resetNetwork() {

        agents.forEach(node => {

            if (node === core) {
                return;
            }

            node.classList.remove(
                "is-active"
            );

            gsap.to(node, {

                "--depth-scale": 1,

                duration: 0.55,

                ease: "power3.out"

            });

        });


        beams.forEach(beam => {

            gsap.to(beam, {

                opacity: 0.65,

                stroke:
                    "rgba(255,255,255,.15)",

                strokeWidth: 1.5,

                duration: 0.55,

                ease: "power2.out"

            });

        });

    }


    /* -----------------------------------------------------
       AGENT INTERACTION
       ----------------------------------------------------- */

    agents.forEach(agent => {

        if (agent === core) {
            return;
        }


        const key =
            getAgentKey(agent);

        if (!key) {
            return;
        }


        agent.setAttribute(
            "tabindex",
            "0"
        );


        agent.addEventListener(
            "mouseenter",
            () => activateAgent(agent)
        );


        agent.addEventListener(
            "mouseleave",
            resetNetwork
        );


        agent.addEventListener(
            "focus",
            () => activateAgent(agent)
        );


        agent.addEventListener(
            "blur",
            resetNetwork
        );

    });


    /* -----------------------------------------------------
       CONSTELLATION INTRO
       ----------------------------------------------------- */

    if (!reducedMotion) {

        gsap.set(agents, {
            opacity: 0,
            "--depth-scale": 0.65
        });


        gsap.set(beams, {
            opacity: 0,
            strokeDasharray: "8 16",
            strokeDashoffset: 160
        });


        const intro =
            gsap.timeline({

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top 72%",

                    once:
                        true

                }

            });


        /* Core */

        intro.to(core, {

            opacity: 1,

            "--depth-scale": 1,

            duration: 1.5,

            ease: "power4.out"

        });


        /* Peripheral nodes */

        intro.to(

            agents.filter(
                node => node !== core
            ),

            {

                opacity: 1,

                "--depth-scale": 1,

                duration: 1.2,

                stagger: {

                    each: 0.12,

                    from: "center"

                },

                ease: "back.out(1.4)"

            },

            "-=0.7"

        );


        /* Network */

        intro.to(

            beams,

            {

                opacity: 0.65,

                strokeDashoffset: 0,

                duration: 1.8,

                stagger: 0.1,

                ease: "power3.out"

            },

            "-=0.8"

        );

    }


    /* -----------------------------------------------------
       AI CORE BREATHING
       ----------------------------------------------------- */

    if (core && !reducedMotion) {

        gsap.to(core, {

            "--core-glow":
                "rgba(76,201,255,.55)",

            "--depth-scale":
                1.045,

            duration:
                2.8,

            repeat:
                -1,

            yoyo:
                true,

            ease:
                "sine.inOut"

        });


        const glow =
            core.querySelector(
                ".core-glow"
            );


        if (glow) {

            gsap.to(glow, {

                scale: 1.4,

                opacity: 0.3,

                duration: 3.5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            });

        }

    }


    /* -----------------------------------------------------
       AGENT SPATIAL FLOAT
       ----------------------------------------------------- */

    if (!reducedMotion) {

        agents.forEach((agent, index) => {

            if (agent === core) {
                return;
            }


            const distance =
                4 + (index % 3) * 2;

            const vertical =
                index % 2 === 0
                    ? -distance
                    : distance;


            gsap.to(agent, {

                "--motion-x":
                    `${distance}px`,

                "--motion-y":
                    `${vertical}px`,

                duration:
                    4.5 +
                    index * 0.45,

                repeat:
                    -1,

                yoyo:
                    true,

                ease:
                    "sine.inOut",

                delay:
                    index * 0.3

            });

        });

    }


    /* -----------------------------------------------------
       CONTINUOUS DATA FLOW
       ----------------------------------------------------- */

    if (!reducedMotion) {

        beams.forEach((beam, index) => {

            gsap.to(beam, {

                strokeDashoffset:
                    -160,

                duration:
                    6 +
                    index * 0.6,

                repeat:
                    -1,

                ease:
                    "none",

                delay:
                    index * 0.4

            });

        });

    }


    /* -----------------------------------------------------
       MOUSE GRAVITY
       ----------------------------------------------------- */

    if (
        finePointer &&
        !reducedMotion
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        wrapper.addEventListener(
            "pointermove",
            event => {

                const rect =
                    wrapper.getBoundingClientRect();


                mouseX =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width - 0.5;


                mouseY =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height - 0.5;

            }
        );


        wrapper.addEventListener(
            "pointerleave",
            () => {

                mouseX = 0;
                mouseY = 0;

            }
        );


        gsap.ticker.add(() => {

            currentX +=
                (mouseX - currentX) *
                0.035;

            currentY +=
                (mouseY - currentY) *
                0.035;


            agents.forEach(
                (agent, index) => {

                    const strength =
                        agent === core
                            ? 18
                            : 8 -
                              Math.min(
                                  index,
                                  4
                              );


                    gsap.set(agent, {

                        "--mouse-x":
                            `${currentX * strength}px`,

                        "--mouse-y":
                            `${currentY * strength}px`

                    });

                }
            );

        });

    }


    /* -----------------------------------------------------
       CORE CURSOR RESPONSE
       ----------------------------------------------------- */

    if (
        core &&
        finePointer &&
        !reducedMotion
    ) {

        wrapper.addEventListener(
            "pointermove",
            event => {

                const rect =
                    wrapper.getBoundingClientRect();


                const x =
                    event.clientX -
                    (
                        rect.left +
                        rect.width / 2
                    );


                const y =
                    event.clientY -
                    (
                        rect.top +
                        rect.height / 2
                    );


                gsap.to(core, {

                    "--core-x":
                        `${x * 0.018}px`,

                    "--core-y":
                        `${y * 0.018}px`,

                    duration:
                        1.2,

                    ease:
                        "power3.out",

                    overwrite:
                        "auto"

                });

            }
        );


        wrapper.addEventListener(
            "pointerleave",
            () => {

                gsap.to(core, {

                    "--core-x":
                        "0px",

                    "--core-y":
                        "0px",

                    duration:
                        1.4,

                    ease:
                        "elastic.out(1,.5)"

                });

            }
        );

    }


    /* -----------------------------------------------------
       PARTICLE SYSTEM
       ----------------------------------------------------- */

    if (
        particleField &&
        particleField.children.length === 0 &&
        !reducedMotion
    ) {

        const count =
            window.innerWidth < 768
                ? 28
                : 70;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "particle";


            particle.setAttribute(
                "aria-hidden",
                "true"
            );


            particleField.appendChild(
                particle
            );


            gsap.set(
                particle,
                {

                    x:
                        Math.random() *
                        wrapper.offsetWidth,

                    y:
                        Math.random() *
                        wrapper.offsetHeight,

                    opacity:
                        0.1 +
                        Math.random() *
                        0.5,

                    scale:
                        0.4 +
                        Math.random() *
                        1.4

                }
            );


            gsap.to(
                particle,
                {

                    x:
                        `+=${Math.random() * 140 - 70}`,

                    y:
                        `+=${Math.random() * 140 - 70}`,

                    opacity:
                        0.05 +
                        Math.random() *
                        0.45,

                    duration:
                        8 +
                        Math.random() * 14,

                    repeat:
                        -1,

                    yoyo:
                        true,

                    ease:
                        "sine.inOut",

                    delay:
                        Math.random() * 5

                }
            );

        }

    }


    /* -----------------------------------------------------
       GRID PARALLAX / MOTION
       ----------------------------------------------------- */

    if (
        grid &&
        !reducedMotion
    ) {

        gsap.to(grid, {

            backgroundPosition:
                "0 900px",

            duration:
                90,

            repeat:
                -1,

            ease:
                "none"

        });


        if (typeof ScrollTrigger !== "undefined") {

            gsap.to(grid, {

                yPercent: -8,

                ease: "none",

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top bottom",

                    end:
                        "bottom top",

                    scrub:
                        1

                }

            });

        }

    }


    /* -----------------------------------------------------
       HEADER REVEAL
       ----------------------------------------------------- */

    if (
        typeof ScrollTrigger !== "undefined" &&
        !reducedMotion
    ) {

        gsap.from(
            ".agent-header",
            {

                opacity: 0,
                y: 80,

                duration:
                    1.3,

                ease:
                    "power4.out",

                scrollTrigger: {

                    trigger:
                        section,

                    start:
                        "top 88%",

                    toggleActions:
                        "play none none reverse"

                }

            }
        );


        gsap.from(
            ".agent-info",
            {

                opacity: 0,
                y: 50,

                duration:
                    1.1,

                ease:
                    "power4.out",

                scrollTrigger: {

                    trigger:
                        ".agent-info",

                    start:
                        "top 90%",

                    toggleActions:
                        "play none none reverse"

                }

            }
        );

    }


    /* -----------------------------------------------------
       DEFAULT INFORMATION
       ----------------------------------------------------- */

    if (
        title &&
        description &&
        agentData.discovery
    ) {

        title.textContent =
            agentData.discovery.title;

        description.textContent =
            agentData.discovery.desc;

    }


    /* -----------------------------------------------------
       RESIZE
       ----------------------------------------------------- */

    let resizeTimer;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(() => {

                    if (
                        typeof ScrollTrigger !==
                        "undefined"
                    ) {

                        ScrollTrigger.refresh();

                    }

                }, 300);

        }
    );


})();
