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
