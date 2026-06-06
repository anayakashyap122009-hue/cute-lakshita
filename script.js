const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage(){

    if(currentPage < pages.length - 1){

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

    }

}

/* HEART ANIMATION */

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
    (15 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    heart.animate(

        [
            {
                transform:"translateY(0)",
                opacity:1
            },

            {
                transform:"translateY(-120vh)",
                opacity:0
            }

        ],

        {
            duration:5000,
            easing:"linear"
        }

    );

    setTimeout(()=>{

        heart.remove();

    },5000);

}

setInterval(createHeart,400);

/* LOVE SPARKLES */

function sparkle(){

    const spark = document.createElement("div");

    spark.innerHTML = "✨";

    spark.style.position = "fixed";

    spark.style.left =
    Math.random()*100 + "vw";

    spark.style.top =
    Math.random()*100 + "vh";

    spark.style.fontSize =
    (10 + Math.random()*15) + "px";

    spark.style.pointerEvents = "none";

    spark.style.zIndex = "999";

    document.body.appendChild(spark);

    spark.animate(

        [
            {opacity:0},
            {opacity:1},
            {opacity:0}
        ],

        {
            duration:2000
        }

    );

    setTimeout(()=>{

        spark.remove();

    },2000);

}

setInterval(sparkle,700);

/* PHOTO POP EFFECT */

const images =
document.querySelectorAll("img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        img.animate(

            [
                {transform:"scale(1)"},
                {transform:"scale(1.15)"},
                {transform:"scale(1)"}
            ],

            {
                duration:600
            }

        );

    });

});

/* FINAL PAGE LOVE BURST */

function loveBurst(){

    if(currentPage !== 5) return;

    for(let i=0;i<10;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize =
        (15 + Math.random()*25)+"px";

        document.body.appendChild(heart);

        const x =
        (Math.random()-0.5)*400;

        const y =
        (Math.random()-0.5)*400;

        heart.animate(

            [
                {
                    transform:"translate(0,0)",
                    opacity:1
                },

                {
                    transform:
                    `translate(${x}px,${y}px)`,

                    opacity:0
                }
            ],

            {
                duration:2500
            }

        );

        setTimeout(()=>{

            heart.remove();

        },2500);

    }

}

setInterval(loveBurst,3000);

console.log("❤️ For Lakshita ❤️");
