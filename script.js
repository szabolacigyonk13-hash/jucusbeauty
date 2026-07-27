/* =========================================
   HAMBURGER MENÜ
========================================= */


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");


if(hamburger){

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}



/* Menü bezárása kattintás után */


const navLinks = document.querySelectorAll(".navbar ul li a");


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        navMenu.classList.remove("active");


    });


});



/* =========================================
   ACCORDION / LENYÍLÓ SZOLGÁLTATÁSOK
========================================= */


const accordionButtons = document.querySelectorAll(".accordion-header");


accordionButtons.forEach(button => {


    button.addEventListener("click", () => {


        button.classList.toggle("active");


        const content = button.nextElementSibling;



        if(content.style.maxHeight){


            content.style.maxHeight = null;


        }

        else {


            content.style.maxHeight = content.scrollHeight + "px";


        }



    });



});





/* =========================================
   VISSZA A TETEJÉRE GOMB
========================================= */


const topButton = document.getElementById("topBtn");



window.addEventListener("scroll", () => {



    if(window.scrollY > 400){


        topButton.style.display = "block";


    }


    else{


        topButton.style.display = "none";


    }



});



topButton.addEventListener("click", () => {


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});





/* =========================================
   SCROLL ANIMÁCIÓ
========================================= */


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



});



const animatedElements = document.querySelectorAll("section");


animatedElements.forEach(element=>{


    element.classList.add("fade-in");


    observer.observe(element);



});





/* =========================================
   AKTÍV MENÜPONT GÖRGETÉSKOR
========================================= */


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){


            current = section.getAttribute("id");


        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });



});



function openLogo(){

    

    document.getElementById("logoModal").style.display="flex";

}


function closeLogo(){

    document.getElementById("logoModal").style.display="none";

}