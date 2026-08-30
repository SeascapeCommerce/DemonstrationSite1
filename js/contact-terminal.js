gsap.registerPlugin(ScrollTrigger);

/* Radar Rotation */

gsap.to(".radar-sweep",{

    rotation:360,

    duration:6,

    repeat:-1,

    ease:"none"

});

/* Signal Pulse */

gsap.to(".signal-dot",{

    scale:1.8,

    opacity:.2,

    repeat:-1,

    yoyo:true,

    duration:1.2

});

/* Terminal Reveal */

gsap.from(".terminal-left",{

    x:-120,

    opacity:0,

    duration:1.5,

    scrollTrigger:{
        trigger:".contact-terminal",
        start:"top 70%"
    }

});

gsap.from(".terminal-right",{

    x:120,

    opacity:0,

    duration:1.5,

    scrollTrigger:{
        trigger:".contact-terminal",
        start:"top 70%"
    }

});

/* Telemetry Flicker */

gsap.to(".telemetry",{

    opacity:.8,

    duration:.15,

    repeat:-1,

    yoyo:true,

    repeatDelay:4

});
