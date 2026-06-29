// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// SCRIPT FOR THE PAGES OF THE PROJECTS 

const slides=document.querySelectorAll(".slide");

const projects=[

{
tag:"01 // Online Food Restaurant",
title:"Eve Afro Dishes",
desc: "A responsive food restaurant website designed to display menu offerings and enhance customer experience for a UK-based Afro dishes brand."
},

{
tag:"02 // Renewable Energy",
title:"P-PAS Synergy Limited",
desc: "A responsive corporate website for a solar energy company, built to showcase services and drive client engagement."
},

{
tag:"03 // Decorative & Industrial Paint Company",
title:"Colour Trust Paints",
desc: "Elegant paint brand website built to showcase coatings, services, and deliver a refined customer experience."
},

{
tag:"04 // LED lighting solutions provider",
title:"The Peterstouch Merchants",
desc: "Modern LED lighting solutions website designed to present products, services, and enhance customer engagement through smooth interactions."
},

{
tag:"05 // Industrial Equipment Supplier",
title:"Best Tech Machines",
desc: "Interactive industrial machinery website built to showcase products and streamline customer interaction."
},

{
tag:"06 // Educational Institution Website",
title:"Royal Crest Schools",
desc: "Modern educational website built to showcase school information, admissions, and enhance communication with students and parents."
}

];

let current=0;``

slides.forEach((slide,index)=>{

gsap.set(slide,{
opacity:index===0?1:0,
scale:index===0?1:1.2
});

});

function updateProject(index){

document.getElementById("tag").textContent=
projects[index].tag;

document.getElementById("title").textContent=
projects[index].title;

document.getElementById("description").textContent=
projects[index].desc;

document.getElementById("current").textContent=
String(index+1).padStart(2,'0');

}

function nextSlide(){

const prev=current;

current=(current+1)%slides.length;

const tl=gsap.timeline();

tl.to(slides[prev],{
opacity:0,
scale:1.15,
duration:1
});

tl.fromTo(
slides[current],
{
opacity:0,
scale:1.3
},
{
opacity:1,
scale:1,
duration:1
},
0
);

tl.fromTo(
["#tag","#title","#description"],
{
y:40,
opacity:0
},
{
y:0,
opacity:1,
stagger:.1,
duration:.8
},
.3
);

updateProject(current);

gsap.fromTo("#progress",
{
width:"0%"
},
{
width:"100%",
duration:6,
ease:"none"
});

}

gsap.fromTo("#progress",
{
width:"0%"
},
{
width:"100%",
duration:6,
ease:"none"
});

setInterval(nextSlide,6000);

document.addEventListener("mousemove",(e)=>{

gsap.to(".visual",{
x:(e.clientX-window.innerWidth/2)*0.01,
y:(e.clientY-window.innerHeight/2)*0.01,
duration:1
});

});
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&