/* ==========================================
   PORTFOLIO JAVASCRIPT
   Author: Mudaser
========================================== */

//==============================
// Typing Animation
//==============================

const words = [
    "web Developer",
    "AI Researcher",
    "Machine Learning Engineer",
    "Web Designer",
    "Python Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;

        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


//==============================
// Dark Mode
//==============================

const themeBtn = document.getElementById("theme");

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light");

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

    }else{

        localStorage.setItem("theme","dark");

    }

});


//==============================
// Scroll Progress Bar
//==============================

window.addEventListener("scroll",()=>{

let winScroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});


//==============================
// Back To Top Button
//==============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


//==============================
// Smooth Scroll
//==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


//==============================
// Scroll Reveal
//==============================

const reveals=document.querySelectorAll("section");

function revealSections(){

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

sec.style.opacity=1;

sec.style.transform="translateY(0px)";

}

});

}

reveals.forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

});

window.addEventListener("scroll",revealSections);

revealSections();


//==============================
// Active Navigation
//==============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


//==============================
// Counter Animation
//==============================

const counters=document.querySelectorAll(".stats h3");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

if(window.scrollY>stats.offsetTop-500 && !started){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

count+=Math.ceil(target/40);

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

});


//==============================
// Mobile Menu
//==============================

const menu=document.getElementById("menu");

const menuBtn=document.querySelector(".menu-btn");

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});


//==============================
// Contact Form Validation
//==============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.border="2px solid red";

valid=false;

}else{

input.style.border="none";

}

});

if(valid){

alert("Thank you! Your message has been sent.");

form.reset();

}

});

}


//==============================
// Navbar Shadow
//==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="none";

}

});


//==============================
// Floating Cards
//==============================

const cards=document.querySelectorAll(".card,.project,.skill");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


//==============================
// Image Hover Effect
//==============================

const images=document.querySelectorAll(".project img,.certificate-grid img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


//==============================
// Loading Screen
//==============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


//==============================
// Console Message
//==============================

console.log("%cWelcome to Mudaser Portfolio 🚀",
"color:#00d4ff;font-size:22px;font-weight:bold;");
