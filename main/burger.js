const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const menu = document.querySelectorAll('.menu li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('menu-active');

        //Animate Links
        menu.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `menuFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();