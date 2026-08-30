
gsap.registerPlugin(ScrollTrigger);

const stages =
gsap.utils.toArray(".mission-stage");

stages.forEach((stage,index)=>{

    const tl = gsap.timeline({

        scrollTrigger:{
            trigger:".mission-control",
            start:`top -=${index * 100}%`,
            end:`top -=${(index + 1) * 100}%`,
            scrub:1
        }

    });

    tl.to(stage,{
        opacity:1,
        y:0,
        duration:.5
    });

    tl.to(stage,{
        opacity:0,
        y:-60,
        duration:.5
    });

});



gsap.to(".orbit-1",{

    rotation:360,

    duration:20,

    repeat:-1,

    ease:"none"

});

gsap.to(".orbit-2",{

    rotation:-360,

    duration:40,

    repeat:-1,

    ease:"none"

});

gsap.to(".orbit-3",{

    rotation:360,

    duration:60,

    repeat:-1,

    ease:"none"

});

gsap.to(".center-core",{

    scale:1.2,

    repeat:-1,

    yoyo:true,

    duration:2

});
