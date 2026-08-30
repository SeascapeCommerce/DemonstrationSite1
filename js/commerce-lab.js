/* =====================================================
   SEASCAPE — COMMERCE LAB
   ===================================================== */

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   INTRO REVEAL
   ===================================================== */

gsap.from(
    ".commerce-title",
    {
        y:120,
        opacity:0,
        duration:1.4,
        ease:"power4.out",

        scrollTrigger:{
            trigger:".commerce-intro",
            start:"top 75%",
            once:true
        }
    }
);


gsap.from(
    ".commerce-intro-text",
    {
        y:50,
        opacity:0,
        duration:1,

        scrollTrigger:{
            trigger:".commerce-intro",
            start:"top 65%",
            once:true
        }
    }
);


/* =====================================================
   GRID MOTION
   ===================================================== */

gsap.to(
    ".commerce-grid",
    {
        backgroundPosition:"0 1000px",

        duration:80,

        repeat:-1,

        ease:"none"
    }
);


/* =====================================================
   ATMOSPHERIC ORBS
   ===================================================== */

gsap.to(
    ".commerce-orb-a",
    {
        x:250,
        y:-150,

        duration:16,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"
    }
);


gsap.to(
    ".commerce-orb-b",
    {
        x:-200,
        y:120,

        duration:19,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"
    }
);


/* =====================================================
   MEDIA REVEAL
   ===================================================== */

const commerceMedia =
    document.querySelector(".commerce-media");


gsap.from(
    commerceMedia,
    {
        clipPath:
            "inset(100% 0 0 0)",

        duration:1.6,

        ease:"power4.inOut",

        scrollTrigger:{
            trigger:commerceMedia,
            start:"top 75%",
            once:true
        }
    }
);


/* =====================================================
   MEDIA PARALLAX
   ===================================================== */

gsap.to(
    ".commerce-video",
    {
        yPercent:8,

        ease:"none",

        scrollTrigger:{
            trigger:".commerce-media",
            start:"top bottom",
            end:"bottom top",
            scrub:1
        }
    }
);


/* =====================================================
   SCAN LINE
   ===================================================== */

gsap.to(
    ".commerce-scanline",
    {
        top:"110%",

        duration:4,

        repeat:-1,

        ease:"none"
    }
);


/* =====================================================
   CORE PULSE
   ===================================================== */

gsap.to(
    ".commerce-system-core",
    {
        scale:1.15,

        opacity:.7,

        duration:2,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"
    }
);


/* =====================================================
   FLOATING INTERFACES
   ===================================================== */

gsap.to(
    ".commerce-interface-a",
    {
        y:-20,

        duration:3.5,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"
    }
);


gsap.to(
    ".commerce-interface-b",
    {
        y:18,

        duration:4.5,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"
    }
);


gsap.to(
    ".commerce-interface-c",
    {
        y:-14,

        duration:5,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"
    }
);


/* =====================================================
   CAPABILITY REVEAL
   ===================================================== */

gsap.from(
    ".commerce-capability",
    {
        opacity:0,
        y:80,

        stagger:.12,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{
            trigger:".commerce-capabilities",
            start:"top 75%"
        }
    }
);


/* =====================================================
   CAPABILITY IMAGE PARALLAX
   ===================================================== */

gsap.utils
    .toArray(".capability-image img")
    .forEach(image=>{

        gsap.to(
            image,
            {
                yPercent:10,

                ease:"none",

                scrollTrigger:{
                    trigger:image,
                    start:"top bottom",
                    end:"bottom top",
                    scrub:1
                }
            }
        );

    });


/* =====================================================
   FEATURE COUNTER
   ===================================================== */

const capabilities =
[
    {
        title:"AI Discovery",

        description:
            "Turn vague customer intent into relevant products, experiences, and decisions.",

        tags:[
            "INTENT",
            "SEARCH",
            "RELEVANCE",
            "AI"
        ]
    },

    {
        title:"Visual Commerce",

        description:
            "Transform products into immersive visual experiences designed to increase engagement and conversion.",

        tags:[
            "VISION",
            "PRODUCT",
            "STORY",
            "AI"
        ]
    },

    {
        title:"Personalization",

        description:
            "Create adaptive experiences that respond to customer behavior, preferences, and context.",

        tags:[
            "BEHAVIOR",
            "CONTEXT",
            "ADAPTIVE",
            "AI"
        ]
    },

    {
        title:"Automation",

        description:
            "Connect commerce workflows across customers, operations, fulfillment, marketing, and support.",

        tags:[
            "WORKFLOW",
            "OPERATIONS",
            "AUTOMATION",
            "AI"
        ]
    },

    {
        title:"Intelligence",

        description:
            "Convert commerce signals into actionable insight, optimization, forecasting, and growth.",

        tags:[
            "DATA",
            "INSIGHT",
            "OPTIMIZATION",
            "AI"
        ]
    }
];


const featureTitle =
    document.querySelector(".commerce-feature-title");

const featureDescription =
    document.querySelector(".commerce-feature-description");

const featureTags =
    document.querySelector(".commerce-feature-tags");

const featureCurrent =
    document.querySelector(".commerce-counter-current");

const featureProgress =
    document.querySelector(
        ".commerce-feature-progress span"
    );


function activateCapability(index){

    const capability =
        capabilities[index];

    if(!capability) return;


    gsap.to(
        [
            featureTitle,
            featureDescription,
            featureTags
        ],
        {
            opacity:0,
            y:15,

            duration:.2,

            onComplete:()=>{

                featureTitle.textContent =
                    capability.title;

                featureDescription.textContent =
                    capability.description;

                featureTags.innerHTML =
                    capability.tags
                        .map(tag=>`<span>${tag}</span>`)
                        .join("");


                featureCurrent.textContent =
                    String(index + 1)
                        .padStart(2,"0");


                gsap.to(
                    [
                        featureTitle,
                        featureDescription,
                        featureTags
                    ],
                    {
                        opacity:1,
                        y:0,

                        duration:.45,

                        stagger:.05,

                        ease:"power3.out"
                    }
                );

            }
        }
    );


    gsap.to(
        featureProgress,
        {
            width:
                `${((index + 1) / capabilities.length) * 100}%`,

            duration:.5,

            ease:"power3.out"
        }
    );

}


/* =====================================================
   CAPABILITY HOVER SYSTEM
   ===================================================== */

gsap.utils
    .toArray(".commerce-capability")
    .forEach((item,index)=>{

        item.addEventListener(
            "mouseenter",
            ()=>{
                activateCapability(index);
            }
        );

    });


/* =====================================================
   MOUSE PARALLAX
   ===================================================== */

const experience =
    document.querySelector(".commerce-experience");


if(experience){

    experience.addEventListener(
        "mousemove",
        event=>{

            const rect =
                experience.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            gsap.to(
                ".commerce-interface-a",
                {
                    x:x * .025,
                    y:y * .025,

                    duration:1,

                    ease:"power3.out"
                }
            );


            gsap.to(
                ".commerce-interface-b",
                {
                    x:x * -.018,
                    y:y * -.018,

                    duration:1.2,

                    ease:"power3.out"
                }
            );


            gsap.to(
                ".commerce-system-core",
                {
                    x:x * .012,
                    y:y * .012,

                    duration:1.3,

                    ease:"power3.out"
                }
            );

        }
    );

}


/* =====================================================
   FINAL STATEMENT REVEAL
   ===================================================== */

gsap.from(
    ".commerce-statement h2",
    {
        y:120,
        opacity:0,

        duration:1.3,

        ease:"power4.out",

        scrollTrigger:{
            trigger:".commerce-statement",
            start:"top 75%",
            once:true
        }
    }
);


gsap.from(
    ".commerce-statement p",
    {
        y:40,
        opacity:0,

        duration:1,

        delay:.2,

        scrollTrigger:{
            trigger:".commerce-statement",
            start:"top 65%",
            once:true
        }
    }
);
