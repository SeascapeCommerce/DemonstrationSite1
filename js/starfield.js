const canvas =
document.getElementById("starfield");

const ctx =
canvas.getContext("2d");

let w;
let h;

function resize(){

    w = canvas.width =
    window.innerWidth;

    h = canvas.height =
    window.innerHeight;

}

resize();

window.addEventListener(
    "resize",
    resize
);

const stars = [];


for(let i=0;i<stars.length;i++){

    for(let j=i+1;j<stars.length;j++){

        const dx =
        stars[i].x-stars[j].x;

        const dy =
        stars[i].y-stars[j].y;

        const dist =
        Math.sqrt(dx*dx+dy*dy);

        if(dist < 120){

            ctx.beginPath();

            ctx.moveTo(
                stars[i].x,
                stars[i].y
            );

            ctx.lineTo(
                stars[j].x,
                stars[j].y
            );

            ctx.strokeStyle =
            `rgba(76,201,255,${
                1-dist/120
            })`;

            ctx.stroke();

        }

    }

}



for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*w,
        y:Math.random()*h,
        r:Math.random()*2,
        speed:.05 + Math.random()*.4

    });

}

function animate(){

    ctx.clearRect(0,0,w,h);

    stars.forEach(star=>{

        star.y += star.speed;

        if(star.y > h){

            star.y = 0;
            star.x = Math.random()*w;

        }

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.r,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        "rgba(255,255,255,.8)";

        ctx.fill();

    });

    requestAnimationFrame(
        animate
    );

}

animate(ctx.save();

ctx.translate(
mouseX,
mouseY
);
ctx.restore();
);



let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove",(e)=>{

    mouseX =
    (e.clientX/window.innerWidth-.5)*30;

    mouseY =
    (e.clientY/window.innerHeight-.5)*30;

});
