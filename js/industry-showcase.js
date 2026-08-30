/* =========================================================
   SEASCAPE COMMERCE
   INDUSTRY SHOWCASE
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);


const industrySection =
    document.querySelector(
        ".industry-showcase"
    );


if (industrySection) {


    const items =
        gsap.utils.toArray(
            ".industry-item"
        );


    const image =
        document.querySelector(
            ".industry-image"
        );


    const infoNumber =
        document.querySelector(
            ".industry-info-number"
        );


    const infoTitle =
        document.querySelector(
            ".industry-info-title"
        );


    const infoDescription =
        document.querySelector(
            ".industry-info-description"
        );


    const industryData = {

        fashion: {

            number:"01",

            title:"Fashion Commerce",

            description:
                "AI-powered discovery, visual merchandising, personalized shopping, product storytelling, and conversion optimization."

        },

        construction: {

            number:"02",

            title:"Construction Commerce",

            description:
                "Streamlined product discovery, project-based purchasing, intelligent specifications, quoting, and procurement workflows."

        },

        healthcare: {

            number:"03",

            title:"Healthcare Commerce",

            description:
                "Structured product discovery, intelligent navigation, education, personalization, and streamlined purchasing experiences."

        },

        sporting: {

            number:"04",

            title:"Sporting Goods Commerce",

            description:
                "AI-powered product discovery, equipment recommendations, customer segmentation, and personalized shopping journeys."

        },

        gaming: {

            number:"05",

            title:"Gaming Commerce",

            description:
                "Immersive product discovery, digital merchandising, personalization, community engagement, and conversion systems."

        },

        home: {

            number:"06",

            title:"Home Furnishings Commerce",

            description:
                "Visual discovery, room inspiration, product recommendations, merchandising, and guided purchasing experiences."

        },

        education: {

            number:"07",

            title:"Education Commerce",

            description:
                "Intelligent discovery, learning-product navigation, personalization, subscription systems, and automated engagement."

        },

        automotive: {

            number:"08",

            title:"Automotive Commerce",

            description:
                "Parts discovery, vehicle compatibility, intelligent search, guided purchasing, and automated customer support."

        },

        industrial: {

            number:"09",

            title:"Industrial Supply Commerce",

            description:
                "Complex catalog navigation, specification discovery, procurement workflows, account-based purchasing, and automation."

        },

        beauty: {

            number:"10",

            title:"Beauty Commerce",

            description:
                "Personalized discovery, visual merchandising, product recommendations, customer journeys, and retention systems."

        }

    };


    /* =====================================================
       ACTIVATE INDUSTRY
       ===================================================== */

    function activateIndustry(
        item
    ) {

        const key =
            item.dataset.industry;


        const data =
            industryData[key];


        if (!data) return;


        items.forEach(
            other => {

                other.classList.remove(
                    "active"
                );

            }
        );


        item.classList.add(
            "active"
        );


        /* ================================================
           IMAGE TRANSITION
           ================================================ */

        const newImage =
            item.dataset.image;


        if (
            image &&
            newImage
        ) {

            gsap.to(
                image,
                {

                    opacity:0,

                    scale:1.1,

                    duration:.25,

                    onComplete:() => {

                        image.src =
                            newImage;


                        image.onload =
                            () => {

                                gsap.to(
                                    image,
                                    {

                                        opacity:1,

                                        scale:1.05,

                                        duration:.8,

                                        ease:
                                            "power3.out"

                                    }
                                );

                            };

                    }

                }
            );

        }


        /* ================================================
           INFORMATION
           ================================================ */

        gsap.to(
            [
                infoNumber,
                infoTitle,
                infoDescription
            ],
            {

                opacity:0,

                y:15,

                duration:.2,

                stagger:.02,

                onComplete:() => {

                    infoNumber.textContent =
                        data.number;

                    infoTitle.textContent =
                        data.title;

                    infoDescription.textContent =
                        data.description;


                    gsap.to(
                        [
                            infoNumber,
                            infoTitle,
                            infoDescription
                        ],
                        {

                            opacity:1,

                            y:0,

                            duration:.5,

                            stagger:.05,

                            ease:
                                "power3.out"

                        }
                    );

                }

            }
        );

    }


    /* =====================================================
       CLICK / HOVER
       ===================================================== */

    items.forEach(
        item => {

            item.addEventListener(
                "mouseenter",
                () => {

                    activateIndustry(
                        item
                    );

                }
            );


            item.addEventListener(
                "focus",
                () => {

                    activateIndustry(
                        item
                    );

                }
            );


            item.addEventListener(
                "click",
                () => {

                    activateIndustry(
                        item
                    );

                }
            );

        }
    );


    /* =====================================================
       INTRO ANIMATION
       ===================================================== */

    gsap.from(
        ".industry-intro > *",
        {

            opacity:0,

            y:50,

            duration:1,

            stagger:.12,

            ease:
                "power3.out",

            scrollTrigger: {

                trigger:
                    industrySection,

                start:
                    "top 75%",

                once:true

            }

        }
    );


    /* =====================================================
       VISUAL REVEAL
       ===================================================== */

    gsap.from(
        ".industry-visual",
        {

            opacity:0,

            x:-80,

            duration:1.2,

            ease:
                "power3.out",

            scrollTrigger: {

                trigger:
                    ".industry-system",

                start:
                    "top 75%",

                once:true

            }

        }
    );


    /* =====================================================
       INDUSTRY LIST REVEAL
       ===================================================== */

    gsap.from(
        ".industry-item",
        {

            opacity:0,

            x:50,

            duration:.7,

            stagger:.06,

            ease:
                "power3.out",

            scrollTrigger: {

                trigger:
                    ".industry-list",

                start:
                    "top 75%",

                once:true

            }

        }
    );


    /* =====================================================
       INFORMATION REVEAL
       ===================================================== */

    gsap.from(
        ".industry-information",
        {

            opacity:0,

            y:40,

            duration:1,

            ease:
                "power3.out",

            scrollTrigger: {

                trigger:
                    ".industry-information",

                start:
                    "top 85%",

                once:true

            }

        }
    );

}
