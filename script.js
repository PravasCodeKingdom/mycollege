gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("overlay");

let menuOpen = false;

menuBtn.addEventListener("click", () => {

if(!menuOpen){

gsap.to(sideNav,{
right:"0px",
duration:0.5,
ease:"power3.out"
});

gsap.to(overlay,{
opacity:1,
visibility:"visible",
duration:0.3
});

menuBtn.classList.add("active");
menuOpen = true;

}else{

closeMenu();

}

});

overlay.addEventListener("click", closeMenu);

function closeMenu(){

gsap.to(sideNav,{
right:"-300px",
duration:0.5,
ease:"power3.inOut"
});

gsap.to(overlay,{
opacity:0,
visibility:"hidden",
duration:0.3
});

menuBtn.classList.remove("active");
menuOpen = false;

}

const whyCard = document.getElementById("whyCard");

const img = document.querySelector(".why-image img");
const title = document.querySelector(".why-text h3");
const text = document.querySelector(".why-text p");

const whyData = [
{
img:"images/img1.jpg",
title:"Modern Campus",
text:"Advanced laboratories, smart classrooms and innovation spaces."
},
{
img:"images/img2.jpg",
title:"Expert Faculty",
text:"Highly qualified professors guiding students in academics."
},
{
img:"images/img3.jpg",
title:"Strong Placements",
text:"Leading companies recruit our students every year."
}
];

let index = 0;
let rotating = false;
let rotation = 0;

whyCard.addEventListener("click", ()=>{

if(rotating) return;
rotating = true;

index = (index + 1) % whyData.length;
rotation += 180;

gsap.to(whyCard,{
rotationY: rotation,
duration:0.8,
ease:"power2.inOut",

onUpdate:function(){

if(this.progress() > 0.5 && !this.changed){

img.src = whyData[index].img;
title.textContent = whyData[index].title;
text.textContent = whyData[index].text;

this.changed = true;

}

},

onComplete:function(){
rotating = false;
this.changed = false;
}

});

});



const card = document.querySelector("#achievementCard");

let flipped = false;

card.addEventListener("click", () => {

if(!flipped){

gsap.to(card,{
rotationY:180,
duration:1,
ease:"power2.inOut"
});

flipped = true;

}else{

gsap.to(card,{
rotationY:0,
duration:1,
ease:"power2.inOut"
});

flipped = false;

}

});
