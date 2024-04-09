// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
