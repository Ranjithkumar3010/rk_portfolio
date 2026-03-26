/* ================================ toggle icon navbar ==============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ================================ scroll section active link ==============================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = Window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.foreach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            })
        }
    })


    /* ================================ sticky nav bar ==============================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================================ remove toggle icon and navbar ==============================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

/* ================================ scrool reveal ==============================*/

scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

scrollReveal().reveal('.home-content', 'heading', { origin: 'top' });
scrollReveal().reveal('.home-img, .service-container,portfolio-box, .conatact from', { origin: 'button' });
scrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
scrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* ================================ typed js ==============================*/

const typed = new Typed('.multiple-text', {
    strings: ['Front-End-Devloper', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});











