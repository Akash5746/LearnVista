burger = document.querySelector('.menu-button')
header = document.querySelector('.header-content')
logo = document.querySelector('.logo')
nav = document.querySelector('.nav')
contact = document.querySelector('.contact-button')

burger.addEventListener('click', () => {
    nav.classList.toggle('v-class-resp');
    contact.classList.toggle('v-class-resp');
    logo.classList.toggle('h-nav-resp');
})



