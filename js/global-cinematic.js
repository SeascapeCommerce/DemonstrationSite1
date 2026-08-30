
gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   PAGE LOAD TIMELINE
========================================== */

window.addEventListener("load", () => {

    const heroSplit = new SplitType(".headline", {
        types: "chars"
    });

    const subSplit = new SplitType(".subhead", {
        types: "words"
    });

    const tl = gsap.timeline();

    tl.from(".navbar", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })

    .from(heroSplit.chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out"
    }, "-=.5")

    .from(subSplit.words, {
        y: 30,
        opacity: 0,
        stagger: 0.03,
        duration: .8
    }, "-=.8")

    .from(".cta", {
        y: 20,
        opacity: 0,
        duration: .8
    }, "-=.5");

});

/* ==========================================
   UNIVERSAL SECTION REVEALS
========================================== */

gsap.utils.toArray("section").forEach(section => {

    gsap.from(section, {

        opacity: 0,
        y: 100,

        duration: 1.4,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,
            start: "top 85%"

        }

    });

});

/* ==========================================
   HERO VIDEO PARALLAX
========================================== */

gsap.to(".hero-video", {

    yPercent: 15,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

/* ==========================================
   STARFIELD PARALLAX
========================================== */

gsap.to(".starfield", {

    yPercent: -20,

    ease: "none",

    scrollTrigger: {

        trigger: ".stars",

        scrub: true

    }

});

/* ==========================================
   TECH GRID DRIFT
========================================== */

gsap.to(".tech-grid", {

    backgroundPosition: "0px 1200px",

    duration: 120,

    repeat: -1,

    ease: "none"

});

/* ==========================================
   INDUSTRY IMAGE PARALLAX
========================================== */

gsap.to(".industry-image", {

    yPercent: -12,

    ease: "none",

    scrollTrigger: {

        trigger: ".industry-showcase",

        start: "top bottom",

        end: "bottom top",

        scrub: true

    }

});

/* ==========================================
   CONTACT VIDEO PARALLAX
========================================== */

gsap.to(".contact-video", {

    scale: 1.15,

    ease: "none",

    scrollTrigger: {

        trigger: ".contact-terminal",

        start: "top bottom",

        end: "bottom top",

        scrub: true

    }

});

/* ==========================================
   FLOATING LABELS
========================================== */

gsap.utils.toArray(".section-label").forEach(label => {

    gsap.to(label, {

        y: -8,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});

/* ==========================================
   NAVBAR HIDE / SHOW
========================================== */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    if (current > lastScroll) {

        gsap.to(".navbar", {

            y: -120,

            duration: .5

        });

    } else {

        gsap.to(".navbar", {

            y: 0,

            duration: .5

        });

    }

    lastScroll = current;

});

/* ==========================================
   AMBIENT GLOW MOTION
========================================== */

gsap.utils.toArray(".core-glow").forEach(glow => {

    gsap.to(glow, {

        scale: 1.2,

        opacity: .5,

        repeat: -1,

        yoyo: true,

        duration: 3,

        ease: "sine.inOut"

    });

});

/* ==========================================
   IMAGE ZOOM SYSTEM
========================================== */

gsap.utils.toArray("img").forEach(image => {

    gsap.from(image, {

        scale: 1.15,

        duration: 2,

        ease: "power2.out",

        scrollTrigger: {

            trigger: image,

            start: "top 90%"

        }

    });

});
