const pages = document.querySelectorAll(".page");

let currentPage = 0;

/* SONGS */

const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
    "song6.mp3"
];

const music = document.getElementById("bgMusic");

/* START MUSIC */

music.src = songs[0];

document.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

    }

}, { once:true });

/* NEXT PAGE */

function nextPage() {

    if (currentPage >= pages.length - 1) return;

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

    changeSong(currentPage);

    window.scrollTo(0,0);
}

/* CHANGE SONG */

function changeSong(index){

    music.style.opacity = "0";

    setTimeout(()=>{

        music.src = songs[index];

        music.play().catch(()=>{});

        music.style.opacity = "1";

    },500);
}

/* FLOATING HEARTS */

const heartContainer =
document.getElementById("hearts-container");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (20 + Math.random()*40) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*6) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,300);

/* SPARKLES */

function createSparkle(){

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
    Math.random()*100 + "vw";

    sparkle.style.top =
    Math.random()*100 + "vh";

    sparkle.style.fontSize =
    (10 + Math.random()*20) + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "999";

    sparkle.style.opacity = ".8";

    document.body.appendChild(sparkle);

    sparkle.animate(
    [
        {opacity:0},
        {opacity:1},
        {opacity:0}
    ],
    {
        duration:2500
    });

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createSparkle,500);

/* PHOTO ANIMATION */

const photos =
document.querySelectorAll("img");

const photoObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate(
            [
                {
                    opacity:0,
                    transform:
                    "translateY(80px)"
                },
                {
                    opacity:1,
                    transform:
                    "translateY(0)"
                }
            ],
            {
                duration:1200,
                fill:"forwards"
            });

        }

    });

});

photos.forEach(photo=>{

    photoObserver.observe(photo);

});

/* FINAL PAGE MAGIC */

function finalEffect(){

    if(currentPage !== 5) return;

    const finalPhoto =
    document.querySelector(".final-photo img");

    finalPhoto.animate(
    [
        {
            transform:"scale(.6)",
            opacity:0
        },
        {
            transform:"scale(1)",
            opacity:1
        }
    ],
    {
        duration:2500,
        fill:"forwards"
    });

}

setInterval(finalEffect,1000);

/* LOVE BURST */

function loveBurst(){

    if(currentPage !== 5) return;

    for(let i=0;i<15;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=
        (20+Math.random()*30)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const x =
        (Math.random()-0.5)*600;

        const y =
        (Math.random()-0.5)*600;

        heart.animate(
        [
            {
                transform:
                "translate(0,0)",
                opacity:1
            },
            {
                transform:
                `translate(${x}px,${y}px)`,
                opacity:0
            }
        ],
        {
            duration:3000
        });

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}

setInterval(loveBurst,3500);

/* AUTO GLOW TEXT */

const hugeLove =
document.querySelector(".huge-love");

if(hugeLove){

    setInterval(()=>{

        hugeLove.style.transform =
        "scale(1.05)";

        setTimeout(()=>{

            hugeLove.style.transform =
            "scale(1)";

        },500);

    },1500);

}

/* PAGE TRANSITION FADE */

pages.forEach(page=>{

    page.style.transition =
    "opacity 1s ease";

});

/* EXTRA HEART RAIN ON LAST PAGE */

function heartRain(){

    if(currentPage !== 5) return;

    const heart =
    document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="fixed";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.top="-50px";

    heart.style.fontSize=
    (20+Math.random()*30)+"px";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    heart.animate(
    [
        {
            transform:
            "translateY(0)"
        },
        {
            transform:
            "translateY(120vh)"
        }
    ],
    {
        duration:5000
    });

    setTimeout(()=>{

        heart.remove();

    },5000);

}

setInterval(heartRain,200);

/* CONSOLE MESSAGE */

console.log(`
❤️ Welcome My Love ❤️

This website was made with love,
memories,
and a heart full of feelings.

Forever ♾️
`);
