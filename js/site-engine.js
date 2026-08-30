gsap.registerPlugin(ScrollTrigger);

/* =====================================
   PAGE INTRO
===================================== */

const introTL = gsap.timeline();

introTL

.from(".navbar",{
    y:-100,
    opacity:0,
    duration:1.2,
    ease:"power4.out"
})

.from(".hero-content > *",{
    y:120,
    opacity:0,
    stagger:.15,
    duration:1.4,
    ease:"power4.out"
}, "-=.7");


/* =====================================
   GLOBAL SECTION REVEALS
===================================== */

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{
        opacity:0,
        y:120,
        duration:1.4,
        ease:"power3.out",
        scrollTrigger:{
            trigger:section,
            start:"top 85%"
        }
    });

});


/* =====================================
   PARALLAX
===================================== */

gsap.utils.toArray(".industry-image").forEach(img=>{

    gsap.to(img,{
        yPercent:15,
        ease:"none",
        scrollTrigger:{
            trigger:img,
            scrub:true
        }
    });

});


/* =====================================
   FLOATING DEPTH
===================================== */

gsap.utils.toArray(
".industry-image-wrapper,.store-preview,.terminal-panel"
).forEach(el=>{

    gsap.to(el,{
        y:"random(-15,15)",
        duration:"random(6,10)",
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
    });

});


/* =====================================
   NAVBAR MORPH
===================================== */

ScrollTrigger.create({

    start:"top -80",

    onUpdate:self=>{

        if(self.direction === 1){

            gsap.to(".navbar",{
                background:"rgba(0,0,0,.75)",
                backdropFilter:"blur(30px)",
                duration:.4
            });

        }else{

            gsap.to(".navbar",{
                background:"transparent",
                backdropFilter:"blur(0px)",
                duration:.4
            });

        }

    }

});


/* =====================================
   FOOTER FADE
===================================== */

gsap.from(".site-footer",{

    opacity:0,

    y:100,

    duration:1.5,

    scrollTrigger:{
        trigger:".site-footer",
        start:"top 90%"
    }

});


const splitTargets = document.querySelectorAll(
".headline, .agent-header h2, .industry-intro h2, .store-header h2, .terminal-title"
);

splitTargets.forEach(target=>{

    const split = new SplitType(target,{
        types:"lines"
    });

    gsap.from(split.lines,{

        y:100,

        opacity:0,

        stagger:.08,

        duration:1.3,

        ease:"power4.out",

        scrollTrigger:{
            trigger:target,
            start:"top 85%"
        }

    });

});
gsap.to(".nebula",{

    x:100,

    y:-50,

    duration:40,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});
