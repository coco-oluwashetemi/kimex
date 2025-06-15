//page to manage the sliders and single page application

window.addEventListener('DOMContentLoaded',(ev)=>{
    //create 10 boxes and set them to random positions
    let hero = document.querySelector('.hero');
    for(let i = 0; i < 10; i++){
        let box = document.createElement('div');
        box.className = 'box';
        box.style.left = Math.random() * 90 + '%';
        box.style.top = Math.random() * 90 + '%';
        box.innerText = `Box ${i+1}`;
        hero.appendChild(box);
    }  
})

window.addEventListener('scroll', (ev) => {
    const header = document.querySelector('header');
    if(window.scrollY < 100) {
        header.classList.remove('isscrolled');
        header.classList.add('isnotscrolled');
    }
    else {
        header.classList.add('isscrolled');
        header.classList.remove('isnotscrolled');
    }

    let hero = document.querySelector('.hero');
    let scrollY = window.scrollY;
    //set the hero's background position based on scroll
    hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    hero.style.backgroundSize = `${100 + scrollY * 0.5}%`;

    const heroRect = hero.getBoundingClientRect();
    if (scrollY < heroRect.top + heroRect.height) {
        //all boxes curve to the bottom center of the screen on scrolling down
        let boxes = document.querySelectorAll('.box');
        boxes.forEach((box, index) => {
            let boxY = scrollY + (index * 50); // stagger the boxes
            box.style.transform = `translateY(${boxY}px)`;
            box.style.transform += ` translateX(-50%)`; // center horizontally
        });
    }

    //all boxes curve to random positions on scrolling up
    if (scrollY < 100) {
        boxes.forEach((box) => {
            box.style.transform = `translateY(0px)`;
            box.style.opacity = 1;
        });
    }

    //add a parallax effect to the hero text
    let heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroText.style.opacity = 1 - (scrollY / 1000);
    }
});


//Working on the email submission form 
document.getElementById('emailForm').addEventListener('submit', function(event) {

    
})
