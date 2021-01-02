const nav = document.querySelector('nav');
const bodyTag = document.querySelector('body');
const arrow = document.querySelector('.image-div img');

// content declaration
const chipchrome = document.querySelector('.chipchrome');
const devils = document.querySelector('.devils');
const jesse = document.querySelector('.jesse');

// function that checks scroll position
let scroll = () => {
    let pos = scrollY / (bodyTag.scrollHeight - innerHeight);
    // console.log(Math.floor(pos*100));
    return Math.floor(pos * 100);
}

// eventlistener changes nav background color to transparent
window.addEventListener('scroll', () => {
    if(window.innerWidth > 1024) {
        nav.style.setProperty('background', scroll() > 5 ? "rgba(0,0,0,0.4)" : "black");
    }
    else
        nav.style.setProperty('background', scroll() > 5 ? "rgba(0,0,0,0.8)" : "black");

    arrow.style.setProperty('opacity', scroll() > 15 ? '0' : '1');

    // appearing sections on scroll
    chipchrome.style.setProperty('opacity', scroll() > 16 ? '1' : '0');
    chipchrome.style.setProperty('transform', scroll() > 16 ? 'scale(1)' : 'scale(0.95)');

    devils.style.setProperty('opacity', scroll() > 46 ? '1' : '0');
    devils.style.setProperty('transform', scroll() > 46 ? 'scale(1)' : 'scale(0.95)');

    jesse.style.setProperty('opacity', scroll() > 75 ? '1' : '0');
    jesse.style.setProperty('transform', scroll() > 75 ? 'scale(1)' : 'scale(0.95)');

})

// console.log(localStorage);

// "nice to see you [name]" text
const welcom = document.querySelector('.welcom');
welcom.textContent = 'nice to see you ' + localStorage['loggedUser'];

//chipchrome 22
//devils 51
//jesse 85
