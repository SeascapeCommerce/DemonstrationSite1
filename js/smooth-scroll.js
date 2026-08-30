const lenis = new Lenis({
duration:1.4
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time)=>{
lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);




gsap.registerPlugin(ScrollTrigger);

gsap.from(".headline",{

opacity:0,

y:150,

duration:1.5,

ease:"power4.out"

});

gsap.from(".subhead",{

opacity:0,

y:50,

duration:1.3,

delay:.4

});

gsap.from(".cta",{

opacity:0,

y:40,

delay:.7,

duration:1

});
