/* =========================================================
   SEASCAPE COMMERCE
   SMOOTH SCROLL SYSTEM
   Lenis + GSAP ScrollTrigger
   ========================================================= */


/* =========================================================
   01. REGISTER GSAP PLUGIN
   ========================================================= */

gsap.registerPlugin(
    ScrollTrigger
);


/* =========================================================
   02. INITIALIZE LENIS
   ========================================================= */

const lenis =
    new Lenis({

        duration: 1.4,

        smoothWheel: true,

        syncTouch: false,

        wheelMultiplier: 1,

        touchMultiplier: 1

    });


/* =========================================================
   03. CONNECT LENIS TO SCROLLTRIGGER
   ========================================================= */

lenis.on(
    "scroll",
    ScrollTrigger.update
);


/* =========================================================
   04. RUN LENIS THROUGH GSAP TICKER
   ========================================================= */

gsap.ticker.add(
    (time) => {

        lenis.raf(
            time * 1000
        );

    }
);


/* =========================================================
   05. DISABLE GSAP LAG SMOOTHING
   ========================================================= */

gsap.ticker.lagSmoothing(
    0
);


/* =========================================================
   06. KEEP SCROLLTRIGGER SYNCHRONIZED
   ========================================================= */

ScrollTrigger.config({

    ignoreMobileResize: true

});


/* =========================================================
   07. REFRESH AFTER PAGE LOAD
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        /*
         * Give the browser a moment to calculate
         * video, images, fonts, and layout dimensions.
         */

        requestAnimationFrame(
            () => {

                ScrollTrigger.refresh();

            }
        );

    }
);


/* =========================================================
   08. REFRESH AFTER RESIZE
   ========================================================= */

let resizeTimeout;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimeout
        );


        resizeTimeout =
            setTimeout(
                () => {

                    ScrollTrigger.refresh();

                },
                250
            );

    }
);
