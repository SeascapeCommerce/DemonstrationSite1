gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   VIDEO PARALLAX
========================================== */

gsap.utils
.toArray(".transition-video")
.forEach(video => {

    gsap.to(video,{

        scale:1.45,

        ease:"none",

        scrollTrigger:{

            trigger:video,

            start:"top bottom",

            end:"bottom top",

            scrub:true

        }

    });

});

/* ==========================================
   TITLE REVEAL
========================================== */

gsap.utils
.toArray(".transition-title")
.forEach(title=>{

    const split =
    new SplitType(title,{
        types:"chars"
    });

    gsap.from(split.chars,{

        yPercent:120,

        opacity:0,

        stagger:.02,

        duration:1.2,

        ease:"power4.out",

        scrollTrigger:{

            trigger:title,

            start:"top 80%"

        }

    });

});

/* ==========================================
   LABEL FLOAT
========================================== */

gsap.utils
.toArray(".transition-label")
.forEach(label=>{

    gsap.to(label,{

        y:-10,

        repeat:-1,

        yoyo:true,

        duration:3,

        ease:"sine.inOut"

    });

});
