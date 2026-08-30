/* =========================================================
   SEASCAPE COMMERCE
   AI AGENT CONSTELLATION
   Advanced GSAP Interaction System
   ========================================================= */

(() => {

    /* -----------------------------------------------------
       SAFETY CHECK
       ----------------------------------------------------- */

    if (typeof gsap === "undefined") {
        console.warn("GSAP is required for agent-network.js");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* -----------------------------------------------------
       DOM REFERENCES
       ----------------------------------------------------- */

    const network =
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

    const title =
        document.getElementById("agentTitle");

    const description =
        document.getElementById("agentDescription");


    /*
       If the constellation isn't present,
       safely stop this file.
    */

    if (!network || !wrapper) {
        return;
    }


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
       ACCESSIBILITY
       ----------------------------------------------------- */

    const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* -----------------------------------------------------
       HELPER:
       IDENTIFY AGENT
       ----------------------------------------------------- */

    function getAgentKey(agent) {

        if (!agent) return null;

        return Object.keys(agentData).find(key =>
            agent.classList.contains(key)
        ) || null;

    }


    /* -----------------------------------------------------
       AGENT INFORMATION PANEL
       ----------------------------------------------------- */

    function updateAgentInfo(key) {

        if (!key || !agentData[key]) return;

        const data = agentData[key];

        if (title) {

            gsap.to(title, {
                opacity: 0,
                y: 8,
                duration: 0.18,
                ease: "power2.out",
                onComplete: () => {

                    title.textContent =
                        data.title;

                    gsap.to(title, {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        ease: "power3.out"
                    });

                }
            });

        }


        if (description) {

            gsap.to(description, {
                opacity: 0,
                y: 8,
                duration: 0.18,
                ease: "power2.out",
                onComplete: () => {

                    description.textContent =
                        data.desc;

                    gsap.to(description, {
                        opacity: 1,
                        y: 0,
                        duration: 0.45,
                        ease: "power3.out"
                    });

                }
            });

        }

    }


    /* -----------------------------------------------------
       ACTIVE AGENT
       ----------------------------------------------------- */

    function activateAgent(agent) {

        if (!agent) return;

        const key =
            getAgentKey(agent);

        if (!key) return;

        updateAgentInfo(key);

        /*
           Remove active state from other agents.
        */

        agents.forEach(item => {

            if (item !== core && item !== agent) {

                item.classList.remove("is-active");

                gsap.to(item, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power3.out"
                });

            }

        });


        agent.classList.add("is-active");


        /*
           Bring selected agent forward.
        */

        gsap.to(agent, {
            scale: 1.06,
            duration: 0.65,
            ease: "power3.out"
        });


        /*
           Activate corresponding beam.
        */

        const beam =
            document.getElementById(`beam-${key}`);

        if (beam) {

            gsap.killTweensOf(beam);

            gsap.to(beam, {
                stroke: "rgba(76,201,255,.9)",
                strokeWidth: 2.5,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });

        }


        /*
           Dim inactive beams slightly.
        */

        beams.forEach(item => {

            if (item !== beam) {

                gsap.to(item, {
                    opacity: 0.22,
                    duration: 0.45,
                    ease: "power2.out"
                });

            }

        });

    }


    /* -----------------------------------------------------
       RESET CONSTELLATION
       ----------------------------------------------------- */

    function resetAgents() {

        agents.forEach(agent => {

            if (agent === core) return;

            agent.classList.remove("is-active");

            gsap.to(agent, {
                scale: 1,
                duration: 0.6,
                ease: "power3.out"
            });

        });


        beams.forEach(beam => {

            gsap.to(beam, {
                stroke: "rgba(255,255,255,.15)",
                strokeWidth: 1.5,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            });

        });

    }


    /* -----------------------------------------------------
       AGENT HOVER / POINTER INTERACTION
       ----------------------------------------------------- */

    agents.forEach(agent => {

        if (agent === core) return;

        const key =
            getAgentKey(agent);

        if (!key) return;


        agent.addEventListener("mouseenter", () => {

            activateAgent(agent);

        });


        agent.addEventListener("mouseleave", () => {

            resetAgents();

        });


        /*
           Keyboard accessibility.
        */

        agent.setAttribute("tabindex", "0");

        agent.addEventListener("focus", () => {

            activateAgent(agent);

        });


        agent.addEventListener("blur", () => {

            resetAgents();

        });

    });


    /* -----------------------------------------------------
       CONSTELLATION INTRO
       ----------------------------------------------------- */

    function constellationIntro() {

        if (prefersReducedMotion) {

            gsap.set(agents, {
                opacity: 1,
                scale: 1
            });

            return;

        }


        gsap.set(agents, {
            opacity: 0,
            scale: 0.72
        });


        gsap.set(beams, {
            opacity: 0,
            strokeDasharray: "8 14",
            strokeDashoffset: 120
        });


        const intro =
            gsap.timeline({

                scrollTrigger: {
                    trigger: network,
                    start: "top 70%",
                    once: true
                }

            });


        /*
           Core appears first.
        */

        intro.to(core, {

            opacity: 1,
            scale: 1,

            duration: 1.4,

            ease: "power4.out"

        });


        /*
           Agents emerge outward.
        */

        intro.to(
            agents.filter(agent => agent !== core),
            {

                opacity: 1,
                scale: 1,

                duration: 1.1,

                stagger: {
                    each: 0.12,
                    from: "center"
                },

                ease: "back.out(1.5)"

            },
            "-=0.7"
        );


        /*
           Connections reveal after nodes.
        */

        intro.to(beams, {

            opacity: 1,
            strokeDashoffset: 0,

            duration: 1.5,

            stagger: 0.1,

            ease: "power3.out"

        }, "-=0.8");

    }


    constellationIntro();


    /* -----------------------------------------------------
       ENERGY PULSE — AI CORE
       ----------------------------------------------------- */

    if (core && !prefersReducedMotion) {

        const corePulse =
            gsap.timeline({
                repeat: -1,
                yoyo: true
            });


        corePulse.to(core, {

            scale: 1.045,

            boxShadow:
                "0 0 70px rgba(76,201,255,.55), 0 0 130px rgba(76,201,255,.18)",

            duration: 2.6,

            ease: "sine.inOut"

        });


        /*
           Core glow gets a slower secondary pulse.
        */

        const coreGlow =
            core.querySelector(".core-glow");


        if (coreGlow) {

            gsap.to(coreGlow, {

                scale: 1.35,
                opacity: 0.35,

                duration: 3.5,

                repeat: -1,
                yoyo: true,

                ease: "sine.inOut"

            });

        }

    }


    /* -----------------------------------------------------
       DATA BEAM MOTION
       ----------------------------------------------------- */

    if (!prefersReducedMotion) {

        beams.forEach((beam, index) => {

            gsap.to(beam, {

                strokeDashoffset: -120,

                duration: 5 + index * 0.45,

                repeat: -1,

                ease: "none",

                delay: index * 0.3

            });

        });

    }


    /* -----------------------------------------------------
       AGENT FLOATING MOTION
       ----------------------------------------------------- */

    if (!prefersReducedMotion) {

        agents.forEach((agent, index) => {

            if (agent === core) return;


            const baseX =
                agent.classList.contains("analytics") ||
                agent.classList.contains("visual")
                    ? "-50%"
                    : "0";


            /*
               We animate CSS variables rather than
               overwriting positional transforms.
            */

            gsap.set(agent, {
                "--float-x": "0px",
                "--float-y": "0px"
            });


            gsap.to(agent, {

                "--float-x":
                    `${Math.sin(index + 1) * 8}px`,

                "--float-y":
                    `${index % 2 === 0 ? -10 : 10}px`,

                duration:
                    4.5 + index * 0.35,

                repeat: -1,
                yoyo: true,

                ease: "sine.inOut",

                delay: index * 0.25

            });

        });

    }


    /* -----------------------------------------------------
       MOUSE GRAVITY
       ----------------------------------------------------- */

    let pointerX = 0;
    let pointerY = 0;

    let targetX = 0;
    let targetY = 0;


    if (!prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {

        wrapper.addEventListener("pointermove", event => {

            const rect =
                wrapper.getBoundingClientRect();

            pointerX =
                event.clientX - rect.left;

            pointerY =
                event.clientY - rect.top;

            targetX =
                (pointerX / rect.width - 0.5) * 2;

            targetY =
                (pointerY / rect.height - 0.5) * 2;

        });


        wrapper.addEventListener("pointerleave", () => {

            targetX = 0;
            targetY = 0;

        });


        /*
           Smooth gravity loop.
        */

        gsap.ticker.add(() => {

            agents.forEach((agent, index) => {

                if (agent === core) return;


                const strength =
                    index % 2 === 0 ? 7 : 4;


                gsap.to(agent, {

                    "--mouse-x":
                        `${targetX * strength}px`,

                    "--mouse-y":
                        `${targetY * strength}px`,

                    duration: 1.2,

                    overwrite: "auto",

                    ease: "power3.out"

                });

            });

        });

    }


    /* -----------------------------------------------------
       PARTICLE FIELD
       ----------------------------------------------------- */

    if (
        particleField &&
        !prefersReducedMotion &&
        particleField.children.length === 0
    ) {

        const particleCount =
            window.innerWidth < 768 ? 35 : 80;


        for (let i = 0; i < particleCount; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";

            particle.setAttribute(
                "aria-hidden",
                "true"
            );

            particleField.appendChild(
                particle
            );


            gsap.set(particle, {

                x:
                    Math.random() *
                    wrapper.offsetWidth,

                y:
                    Math.random() *
                    wrapper.offsetHeight,

                opacity:
                    0.15 +
                    Math.random() * 0.55,

                scale:
                    0.5 +
                    Math.random() * 1.5

            });


            gsap.to(particle, {

                x:
                    `+=${Math.random() * 100 - 50}`,

                y:
                    `+=${Math.random() * 100 - 50}`,

                opacity:
                    0.1 +
                    Math.random() * 0.5,

                duration:
                    8 + Math.random() * 12,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut",

                delay:
                    Math.random() * 4

            });

        }

    }


    /* -----------------------------------------------------
       SLOW CONSTELLATION ROTATION
       ----------------------------------------------------- */

    if (!prefersReducedMotion) {

        gsap.to(wrapper, {

            "--network-rotation": "1deg",

            duration: 12,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }


    /* -----------------------------------------------------
       MAGNETIC CORE RESPONSE
       ----------------------------------------------------- */

    if (
        core &&
        !prefersReducedMotion &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        wrapper.addEventListener("pointermove", event => {

            const rect =
                wrapper.getBoundingClientRect();

            const x =
                event.clientX -
                (rect.left + rect.width / 2);

            const y =
                event.clientY -
                (rect.top + rect.height / 2);

            gsap.to(core, {

                x: x * 0.025,
                y: y * 0.025,

                duration: 1,

                ease: "power3.out",

                overwrite: "auto"

            });

        });


        wrapper.addEventListener("pointerleave", () => {

            gsap.to(core, {

                x: 0,
                y: 0,

                duration: 1.2,

                ease: "elastic.out(1,0.5)"

            });

        });

    }


    /* -----------------------------------------------------
       SECTION REVEAL
       ----------------------------------------------------- */

    if (
        typeof ScrollTrigger !== "undefined" &&
        !prefersReducedMotion
    ) {

        gsap.from(".agent-header", {

            opacity: 0,
            y: 70,

            duration: 1.2,

            ease: "power4.out",

            scrollTrigger: {

                trigger: network,
                start: "top 82%",

                toggleActions:
                    "play none none reverse"

            }

        });


        gsap.from(".agent-info", {

            opacity: 0,
            y: 40,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: ".agent-info",
                start: "top 90%",

                toggleActions:
                    "play none none reverse"

            }

        });

    }


    /* -----------------------------------------------------
       INITIAL INFORMATION
       ----------------------------------------------------- */

    if (title && description) {

        title.textContent =
            agentData.discovery.title;

        description.textContent =
            agentData.discovery.desc;

    }


    /* -----------------------------------------------------
       CLEAN RESIZE
       ----------------------------------------------------- */

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            if (
                typeof ScrollTrigger !== "undefined"
            ) {

                ScrollTrigger.refresh();

            }

        }, 250);

    });


})();
