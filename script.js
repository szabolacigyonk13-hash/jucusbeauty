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




// ===============================
// ÁRLISTA LAPOZÁS
// ===============================

let currentPrice = 0;

const pricePages = document.querySelectorAll(".price-page");
const pageNumber = document.getElementById("pageNumber");


function showPrice(){

    pricePages.forEach(page => {
        page.classList.remove("active");
    });


    pricePages[currentPrice].classList.add("active");


    pageNumber.innerHTML =
    (currentPrice + 1) + " / " + pricePages.length;

}



function nextPrice(){

    currentPrice++;


    if(currentPrice >= pricePages.length){

        currentPrice = 0;

    }


    showPrice();

}




function prevPrice(){

    currentPrice--;


    if(currentPrice < 0){

        currentPrice = pricePages.length - 1;

    }


    showPrice();

}



// KEZELÉSEK BELSŐ LENYITÁS

// KEZELÉSEK BELSŐ LENYITÁS

const treatmentButtons = document.querySelectorAll(".treatment-title");

treatmentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.nextElementSibling;

        text.classList.toggle("show");


        const parentAccordion = button.closest(".accordion-content");


        setTimeout(() => {

            if(parentAccordion){

                parentAccordion.style.maxHeight =
                parentAccordion.scrollHeight + "px";

            }

        }, 450);

    });

});




// KÉP NAGYÍTÁS

function openImage(img){

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = img.src;

    modal.classList.add("show");

}


function closeImage(){

    const modal = document.getElementById("imageModal");

    modal.classList.remove("show");

}


document.getElementById("imageModal").addEventListener("click", function(e){

    if(e.target.id === "imageModal"){
        closeImage();
    }

});



let galleryImages = [];
let currentImage = 0;


window.onload = function(){

    galleryImages = Array.from(document.querySelectorAll(".gallery img"));

};


function openImage(img){

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    currentImage = galleryImages.indexOf(img);

    modalImg.src = img.src;

    modal.classList.add("show");

}


function nextImage(){

    currentImage++;

    if(currentImage >= galleryImages.length){
        currentImage = 0;
    }

    document.getElementById("modalImage").src =
    galleryImages[currentImage].src;

}


function prevImage(){

    currentImage--;

    if(currentImage < 0){
        currentImage = galleryImages.length - 1;
    }

    document.getElementById("modalImage").src =
    galleryImages[currentImage].src;

}


function closeImage(){

    document.getElementById("imageModal")
    .classList.remove("show");

}



