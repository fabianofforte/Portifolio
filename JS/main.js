/*======================= icone que altera barra de navegação ==============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Alterna entre o ícone de menu e de fechar
    navbar.classList.toggle('active') // Mostra/oculta a barra de navegação
}

/*======================= seção de rolagem ==============================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*======================= barra de navegação fixa ==============================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*======================= remover icone que altera barra de navegação ==============================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*======================= revelação de rolagem ==============================*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

/*======================= multiplo texto ==============================*/
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Frontend', 'Desenvolvedor Backend'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
