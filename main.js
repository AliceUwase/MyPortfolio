document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        console.log('Menu clicked!');
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // remove toggle icon and navbar when scroll
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});

