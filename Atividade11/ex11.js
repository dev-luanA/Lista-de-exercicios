function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

document.querySelector('.navbar-toggle').addEventListener('click', toggleMenu);
