const field =
document.querySelector(".particle-field");

for(let i=0;i<80;i++){

    const p =
    document.createElement("div");

    p.classList.add("particle");

    field.appendChild(p);

    gsap.set(p,{
        x:Math.random()*1200,
        y:Math.random()*800
    });

    gsap.to(p,{
        x:`+=${Math.random()*200-100}`,
        y:`+=${Math.random()*200-100}`,
        duration:10+Math.random()*15,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
    });

}

gsap.to(".tech-grid",{
    backgroundPosition:"0 1000px",
    duration:80,
    repeat:-1,
    ease:"none"
});
