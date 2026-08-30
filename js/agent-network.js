const agentData = {

    discovery:{
        title:"Discovery Agent",
        desc:"Researches markets, audiences, competitors, and growth opportunities."
    },

    marketing:{
        title:"Marketing Agent",
        desc:"Creates campaigns, messaging strategies, content, and customer acquisition systems."
    },

    store:{
        title:"Store Agent",
        desc:"Optimizes storefront architecture, navigation, products, and conversion paths."
    },

    support:{
        title:"Support Agent",
        desc:"Handles customer interactions, FAQs, ticket routing, and retention workflows."
    },

    analytics:{
        title:"Analytics Agent",
        desc:"Measures performance, identifies opportunities, and delivers actionable insights."
    },

    visual:{
        title:"Visual Agent",
        desc:"Generates imagery, branding assets, product visuals, and creative concepts."
    }

};

const title =
document.getElementById("agentTitle");

const desc =
document.getElementById("agentDescription");

document.querySelectorAll(".agent").forEach(agent=>{

    if(agent.classList.contains("core")) return;

    agent.addEventListener("mouseenter",()=>{

        const key =
        [...agent.classList]
        .find(c=>agentData[c]);

        title.textContent =
        agentData[key].title;

        desc.textContent =
        agentData[key].desc;

    });

});



gsap.from(".agent",{

    scale:0,

    opacity:0,

    stagger:.12,

    duration:1.4,

    ease:"back.out(1.7)",

    scrollTrigger:{
        trigger:".agent-network",
        start:"top 70%"
    }

});


gsap.to(".beam",{
    strokeDashoffset:-200,
    duration:8,
    repeat:-1,
    ease:"none",
    stagger:.3
});

gsap.utils.toArray(".agent").forEach(node=>{

    gsap.to(node,{
        y:"random(-15,15)",
        x:"random(-10,10)",
        duration:"random(4,8)",
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
    });

});

const coreTL = gsap.timeline({
    repeat:-1
});

coreTL.to(".core",{
    scale:1.08,
    duration:2,
    ease:"power2.inOut"
});

coreTL.to(".core",{
    scale:1,
    duration:2,
    ease:"power2.inOut"
});

const wrapper =
document.querySelector(".network-wrapper");

wrapper.addEventListener("mousemove",(e)=>{

    const rect =
    wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    document
    .querySelectorAll(".agent")
    .forEach(agent=>{

        const centerX =
        agent.offsetLeft +
        agent.offsetWidth/2;

        const centerY =
        agent.offsetTop +
        agent.offsetHeight/2;

        const dx = x-centerX;
        const dy = y-centerY;

        gsap.to(agent,{
            x:dx*.02,
            y:dy*.02,
            duration:.8
        });

    });

});
