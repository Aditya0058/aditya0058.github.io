/* ==========================================================
   ADITYA RAJPUT PORTFOLIO

   SCRIPT.JS

   PART 1 / 5

   Scroll Reveal
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


/* ==========================================================
   OBSERVER
========================================================== */

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},

{

    threshold:0.15,

    rootMargin:"0px 0px -80px 0px"

}

);


/* ==========================================================
   OBSERVE
========================================================== */

revealElements.forEach((element)=>{

    observer.observe(element);

});
/* ==========================================================
   CURSOR SPOTLIGHT
   PART 2 / 5
========================================================== */

const cursorGlow =
    document.getElementById("cursor-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;


/* ==========================================================
   TRACK MOUSE
========================================================== */

window.addEventListener("mousemove",(event)=>{

    mouseX = event.clientX;
    mouseY = event.clientY;

});


/* ==========================================================
   SMOOTH FOLLOW
========================================================== */

function animateCursor(){

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* ==========================================================
   HIDE ON MOBILE
========================================================== */

function updateCursorVisibility(){

    if(window.innerWidth < 768){

        cursorGlow.style.display = "none";

    }
    else{

        cursorGlow.style.display = "block";

    }

}

updateCursorVisibility();

window.addEventListener(
    "resize",
    updateCursorVisibility
);


/* ==========================================================
   EXTRA GLOW ON LINK HOVER
========================================================== */

const interactiveElements =
document.querySelectorAll(

    "a, button, .skill-card, .book-card, .stat-card"

);

interactiveElements.forEach((element)=>{

    element.addEventListener("mouseenter",()=>{

        cursorGlow.style.transform =
            "translate(-50%,-50%) scale(1.25)";

    });

    element.addEventListener("mouseleave",()=>{

        cursorGlow.style.transform =
            "translate(-50%,-50%) scale(1)";

    });

});
/* ==========================================================
   SCROLL PROGRESS + NAVBAR
   PART 3 / 5
========================================================== */

const progressBar =
    document.getElementById("scroll-progress");

const navbar =
    document.querySelector(".navbar");

let ticking = false;


/* ==========================================================
   UPDATE ON SCROLL
========================================================== */

function updateScrollEffects(){

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${progress}%`;


    /* ======================================
       NAVBAR EFFECT
    ====================================== */

    if(scrollTop > 40){

        navbar.style.background =
            "rgba(11,11,13,.82)";

        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,.08)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.28)";

    }
    else{

        navbar.style.background =
            "rgba(11,11,13,.45)";

        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,.05)";

        navbar.style.boxShadow =
            "none";

    }

    ticking = false;

}


/* ==========================================================
   OPTIMIZED SCROLL
========================================================== */

window.addEventListener("scroll",()=>{

    if(!ticking){

        window.requestAnimationFrame(

            updateScrollEffects

        );

        ticking = true;

    }

});


/* ==========================================================
   INITIAL UPDATE
========================================================== */

updateScrollEffects();
/* ==========================================================
   STAGGERED ANIMATIONS
   PART 4 / 5
========================================================== */

const staggerGroups = [

    ".skills-grid .skill-card",
    ".books-grid .book-card",
    ".hero-stats .stat-card",
    ".timeline .timeline-item"

];

staggerGroups.forEach((selector)=>{

    const elements =
        document.querySelectorAll(selector);

    elements.forEach((element,index)=>{

        element.style.transitionDelay =
            `${index * 120}ms`;

    });

});


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");

function updateActiveNavigation(){

    let currentSection = "";

    sections.forEach((section)=>{

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if(

            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight

        ){

            currentSection = section.id;

        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove("active-link");

        const target =
            link.getAttribute("href");

        if(target === `#${currentSection}`){

            link.classList.add("active-link");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

const buttons =
document.querySelectorAll(

    ".primary-btn, .secondary-btn"

);

buttons.forEach((button)=>{

    button.addEventListener("click",(event)=>{

        const ripple =
            document.createElement("span");

        const rect =
            button.getBoundingClientRect();

        const size =
            Math.max(rect.width, rect.height);

        ripple.style.width =
            `${size}px`;

        ripple.style.height =
            `${size}px`;

        ripple.style.left =
            `${event.clientX - rect.left - size/2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size/2}px`;

        ripple.className = "ripple";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/* ==========================================================
   PART 5 / 5
   FINAL POLISH
========================================================== */

/* ==========================================================
   DYNAMIC GREETING
========================================================== */

const heroTag =
document.querySelector(".hero-tag");

if(heroTag){

    const hour = new Date().getHours();

    let greeting = "Welcome";

    if(hour >= 5 && hour < 12){

        greeting = "Good Morning";

    }
    else if(hour >= 12 && hour < 17){

        greeting = "Good Afternoon";

    }
    else if(hour >= 17 && hour < 22){

        greeting = "Good Evening";

    }
    else{

        greeting = "Good Night";

    }

    heroTag.title = greeting;

}


/* ==========================================================
   LAZY LOAD IMAGES
========================================================== */

const images =
document.querySelectorAll("img[data-src]");

if(images.length){

    const imageObserver =
    new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.onload = ()=>{

                img.removeAttribute("data-src");

            };

            observer.unobserve(img);

        });

    });

    images.forEach(img=>{

        imageObserver.observe(img);

    });

}


/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown",(event)=>{

    if(event.target.tagName === "INPUT") return;
    if(event.target.tagName === "TEXTAREA") return;

    switch(event.key.toLowerCase()){

        case "h":

            document.querySelector("#hero")
            ?.scrollIntoView({

                behavior:"smooth"

            });

        break;

        case "a":

            document.querySelector("#about")
            ?.scrollIntoView({

                behavior:"smooth"

            });

        break;

        case "c":

            document.querySelector("#contact")
            ?.scrollIntoView({

                behavior:"smooth"

            });

        break;

    }

});


/* ==========================================================
   PREVENT DOUBLE CLICK TEXT SELECTION
========================================================== */

document.querySelectorAll(

    ".primary-btn, .secondary-btn"

).forEach(button=>{

    button.addEventListener("mousedown",(event)=>{

        event.preventDefault();

    });

});


/* ==========================================================
   INITIALIZE
========================================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    updateScrollEffects();
    updateActiveNavigation();

});


/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(

`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Welcome, Developer 👋

You found the console.

Portfolio by:
Aditya Rajput

Computer Engineering Student
AI Enthusiast
Builder

GitHub:
https://github.com/Aditya0058

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

);