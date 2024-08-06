let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text code
const typed = new Typed('.mulitple-text', {
    strings: ['Frontend Developer', 'Teacher', 'Tech Enthusiast'],
    typeSpeed: 60,
    backSpeed: 60, 
    backDelay: 1000,
    loop: true,
});









