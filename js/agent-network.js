/* =========================================================
   SEASCAPE COMMERCE
   AI AGENT NETWORK
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   01. AGENT DATA
   ========================================================= */

const agentData = {

    discovery: {
        title: "Discovery Agent",
        desc: "Researches markets, audiences, competitors, customer intent, and growth opportunities."
    },

    marketing: {
        title: "Marketing Agent",
        desc: "Creates campaigns, messaging strategies, content, and customer acquisition systems."
    },

    store: {
        title: "Store Agent",
        desc: "Optimizes storefront architecture, navigation, products, merchandising, and conversion paths."
    },

    support: {
        title: "Support Agent",
        desc: "Handles customer interactions, FAQs, ticket routing, service workflows, and retention."
    },

    analytics: {
        title: "Analytics Agent",
        desc: "Measures performance, identifies opportunities, detects trends, and delivers actionable insights."
    },

    visual: {
        title: "Visual Agent",
        desc: "Generates imagery, branding assets, product visuals, creative concepts, and visual experiences."
    }

};


/* =========================================================
   02. DOM REFERENCES
   ========================================================= */

const network =
    document.querySelector(".agent-network");

const wrapper =
    document.querySelector(".network-wrapper");

const title =
    document.getElementById("agentTitle");

const desc =
    document.getElementById("agentDescription");

const agents =
    document.querySelectorAll(".agent");

const beams =
    document.querySelectorAll(".beam");


/* =========================================================
   03. SAFETY CHECK
   ========================================================= */

if (
    network &&
    wrapper &&
    title &&
    desc
) {


    /* =====================================================
       04. AGENT STATE
       Prevents GSAP animations from fighting each other.
       ===================================================== */

    const agentStates = new Map();


    document
        .querySelectorAll(".agent:not(.core)")
        .forEach(agent => {

            const state = {

                floatX: 0,

                floatY: 0,

                mouseX: 0,

                mouseY: 0

            };

            agentStates.set(agent, state);

            /*
             * Make agent nodes keyboard accessible.
             */

            agent.setAttribute("tabindex", "0");

            agent.setAttribute(
                "role",
                "button"
            );

        });


    /* =====================================================
       05. UPDATE AGENT INFORMATION
       ===================================================== */

    function updateAgentInfo(agent) {

        const key =
            [...agent.classList]
                .find(className =>
                    agentData[className]
                );

        if (!key) return;

        const data =
            agentData[key];

        /*
         * Animate the information change.
         */

        gsap.to(
            [title, desc],
            {
                opacity: 0,
                y: 10,
                duration: 0.18,
                stagger: 0.03,
                onComplete: () => {

                    title.textContent =
                        data.title;

                    desc.textContent =
                        data.desc;

                    gsap.to(
                        [title, desc],
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                            stagger: 0.04,
                            ease: "power2.out"
                        }
                    );

                }
            }
        );

    }


    /* =====================================================
       06. CONNECTION BEAM MAP
       ===================================================== */

    const beamMap = {

        discovery: "#beam-discovery",

        marketing: "#beam-marketing",

        store: "#beam-store",

        support: "#beam-support",

        analytics: "#beam-analytics",

        visual: "#beam-visual"

    };


    /* =====================================================
       07. ACTIVATE CONNECTION
       ===================================================== */

    function activateConnection(agent) {

        const key =
            [...agent.classList]
                .find(className =>
                    beamMap[className]
                );

        if (!key) return;

        const beam =
            document.querySelector(
                beamMap[key]
            );

        if (!beam) return;

        /*
         * Highlight selected agent.
         */

        gsap.to(agent, {

            scale: 1.06,

            duration: 0.4,

            ease: "power2.out",

            overwrite: "auto"

        });


        /*
         * Illuminate its connection
         * to the AI Core.
         */

        gsap.to(beam, {

            stroke: "#4cc9ff",

            strokeWidth: 3,

            opacity: 1,

            duration: 0.35,

            ease: "power2.out",

            overwrite: "auto"

        });

    }


    /* =====================================================
       08. DEACTIVATE CONNECTION
       ===================================================== */

    function deactivateConnection(agent) {

        const key =
            [...agent.classList]
                .find(className =>
                    beamMap[className]
                );

        if (!key) return;

        const beam =
            document.querySelector(
                beamMap[key]
            );

        if (!beam) return;

        gsap.to(agent, {

            scale: 1,

            duration: 0.4,

            ease: "power2.out",

            overwrite: "auto"

        });


        gsap.to(beam, {

            stroke: "rgba(255,255,255,0.15)",

            strokeWidth: 1.5,

            opacity: 1,

            duration: 0.4,

            ease: "power2.out",

            overwrite: "auto"

        });

    }


    /* =====================================================
       09. AGENT INTERACTION
       ===================================================== */

    document
        .querySelectorAll(".agent:not(.core)")
        .forEach(agent => {


            agent.addEventListener(
                "mouseenter",
                () => {

                    updateAgentInfo(agent);

                    activateConnection(agent);

                }
            );


            agent.addEventListener(
                "mouseleave",
                () => {

                    deactivateConnection(agent);

                }
            );


            /*
             * Keyboard accessibility.
             */

            agent.addEventListener(
                "focus",
                () => {

                    updateAgentInfo(agent);

                    activateConnection(agent);

                }
            );


            agent.addEventListener(
                "blur",
                () => {

                    deactivateConnection(agent);

                }
            );


            /*
             * Touch / mobile interaction.
             */

            agent.addEventListener(
                "click",
                () => {

                    updateAgentInfo(agent);

                    activateConnection(agent);

                }
            );

        });


    /* =====================================================
       10. AGENT ENTRANCE ANIMATION
       ===================================================== */

    gsap.from(
        agents,
        {

            scale: 0,

            opacity: 0,

            duration: 1.4,

            stagger: 0.12,

            ease: "back.out(1.7)",

            scrollTrigger: {

                trigger: network,

                start: "top 70%",

                once: true

            }

        }
    );


    /* =====================================================
       11. ENERGY BEAM ANIMATION
       ===================================================== */

    if (beams.length) {

        gsap.set(
            beams,
            {
                strokeDasharray: "15 15",
                strokeDashoffset: 0
            }
        );


        gsap.to(
            beams,
            {

                strokeDashoffset: -200,

                duration: 8,

                repeat: -1,

                ease: "none",

                stagger: 0.3

            }
        );

    }


    /* =====================================================
       12. FLOATING AGENT MOTION
       
       Uses independent state values so floating motion
       and mouse gravity don't fight over x/y.
       ===================================================== */

    agentStates.forEach(
        (state, agent) => {

            const floatAnimation =
                gsap.timeline({
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });


            floatAnimation.to(
                state,
                {

                    floatX:
                        gsap.utils.random(-10, 10),

                    floatY:
                        gsap.utils.random(-15, 15),

                    duration:
                        gsap.utils.random(4, 8),

                    onUpdate: () => {

                        renderAgent(
                            agent,
                            state
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       13. AGENT RENDER ENGINE
       Combines floating movement + mouse movement.
       ===================================================== */

    function renderAgent(
        agent,
        state
    ) {

        gsap.set(
            agent,
            {

                x:
                    state.floatX +
                    state.mouseX,

                y:
                    state.floatY +
                    state.mouseY

            }
        );

    }


    /* =====================================================
       14. AI CORE BREATHING EFFECT
       ===================================================== */

    const core =
        document.querySelector(".core");

    if (core) {

        /*
         * Wait until entrance animation completes.
         */

        gsap.delayedCall(
            1.8,
            () => {

                const coreTL =
                    gsap.timeline({
                        repeat: -1,
                        yoyo: true
                    });


                coreTL.to(
                    core,
                    {

                        scale: 1.08,

                        duration: 2,

                        ease: "power2.inOut"

                    }
                );

            }
        );

    }


    /* =====================================================
       15. CORE GLOW PULSE
       ===================================================== */

    const coreGlow =
        document.querySelector(".core-glow");

    if (coreGlow) {

        gsap.to(
            coreGlow,
            {

                scale: 1.15,

                opacity: 0.7,

                duration: 2.5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            }
        );

    }


    /* =====================================================
       16. MOUSE GRAVITY
       ===================================================== */

    let mouseX = 0;

    let mouseY = 0;


    wrapper.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                wrapper.getBoundingClientRect();


            mouseX =
                event.clientX -
                rect.left;


            mouseY =
                event.clientY -
                rect.top;


            agentStates.forEach(
                (state, agent) => {

                    const centerX =
                        agent.offsetLeft +
                        agent.offsetWidth / 2;


                    const centerY =
                        agent.offsetTop +
                        agent.offsetHeight / 2;


                    const dx =
                        mouseX -
                        centerX;


                    const dy =
                        mouseY -
                        centerY;


                    /*
                     * Subtle gravitational response.
                     */

                    state.mouseX =
                        gsap.utils.clamp(
                            -20,
                            20,
                            dx * 0.025
                        );


                    state.mouseY =
                        gsap.utils.clamp(
                            -20,
                            20,
                            dy * 0.025
                        );


                    renderAgent(
                        agent,
                        state
                    );

                }
            );

        }
    );


    /* =====================================================
       17. RETURN AGENTS WHEN MOUSE LEAVES
       ===================================================== */

    wrapper.addEventListener(
        "mouseleave",
        () => {

            agentStates.forEach(
                (state, agent) => {

                    gsap.to(
                        state,
                        {

                            mouseX: 0,

                            mouseY: 0,

                            duration: 0.8,

                            ease: "power3.out",

                            onUpdate: () => {

                                renderAgent(
                                    agent,
                                    state
                                );

                            }

                        }
                    );

                }
            );

        }
    );


    /* =====================================================
       18. TECH GRID MOTION
       ===================================================== */

    const techGrid =
        document.querySelector(".tech-grid");

    if (techGrid) {

        gsap.to(
            techGrid,
            {

                backgroundPosition:
                    "0 1000px",

                duration: 80,

                repeat: -1,

                ease: "none"

            }
        );

    }


    /* =====================================================
       19. NETWORK PARALLAX
       ===================================================== */

    gsap.to(
        ".network-wrapper",
        {

            y: -30,

            ease: "none",

            scrollTrigger: {

                trigger: network,

                start: "top bottom",

                end: "bottom top",

                scrub: 1

            }

        }
    );


    /* =====================================================
       20. NETWORK HEADER REVEAL
       ===================================================== */

    gsap.from(
        ".agent-header > *",
        {

            opacity: 0,

            y: 50,

            duration: 1,

            stagger: 0.12,

            ease: "power3.out",

            scrollTrigger: {

                trigger: ".agent-header",

                start: "top 80%",

                once: true

            }

        }
    );


    /* =====================================================
       21. AGENT INFO REVEAL
       ===================================================== */

    gsap.from(
        ".agent-info",
        {

            opacity: 0,

            y: 40,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: ".agent-info",

                start: "top 85%",

                once: true

            }

        }
    );


    /* =====================================================
       22. BEAM HOVER PULSE
       ===================================================== */

    document
        .querySelectorAll(".agent:not(.core)")
        .forEach(agent => {

            agent.addEventListener(
                "mouseenter",
                () => {

                    const key =
                        [...agent.classList]
                            .find(className =>
                                beamMap[className]
                            );

                    if (!key) return;

                    const beam =
                        document.querySelector(
                            beamMap[key]
                        );

                    if (!beam) return;


                    gsap.to(
                        beam,
                        {

                            strokeDasharray:
                                "4 8",

                            duration: 0.3,

                            overwrite: "auto"

                        }
                    );

                }
            );


            agent.addEventListener(
                "mouseleave",
                () => {

                    const key =
                        [...agent.classList]
                            .find(className =>
                                beamMap[className]
                            );

                    if (!key) return;

                    const beam =
                        document.querySelector(
                            beamMap[key]
                        );

                    if (!beam) return;


                    gsap.to(
                        beam,
                        {

                            strokeDasharray:
                                "15 15",

                            duration: 0.4,

                            overwrite: "auto"

                        }
                    );

                }
            );

        });


    /* =====================================================
       23. MOBILE POINTER OPTIMIZATION
       ===================================================== */

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {

        wrapper.style.cursor =
            "default";

    }


    /* =====================================================
       24. REFRESH SCROLLTRIGGER
       Ensures animations calculate correctly after
       the page has completely loaded.
       ===================================================== */

    window.addEventListener(
        "load",
        () => {

            ScrollTrigger.refresh();

        }
    );

}
