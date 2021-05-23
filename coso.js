const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav li');

    //Toggle nav

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

     //Animate links INSIDE EVENT LISTENER

    navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;    
        }
    });
    });
}

navSlide();

//Carousel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prev = document.querySelector('#prev-btn');
const next = document.querySelector('#next-btn');

//Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';

//Button listener

next.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prev.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});