export default function menuScrollTo() {
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
