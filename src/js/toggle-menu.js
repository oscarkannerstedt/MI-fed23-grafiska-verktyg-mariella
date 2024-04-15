export default function toggleMenu() {
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('change', function () {
      document.body.classList.toggle('menu-active', this.checked);

      const leftSvgLogo = document.getElementById('leftSvgId');
      const rightSvgLogo = document.getElementById('rightSvgId');
      leftSvgLogo.classList.remove('svgLogoAnimation');
      rightSvgLogo.classList.remove('svgLogoAnimation');
      setTimeout(() => {
        leftSvgLogo.classList.add('svgLogoAnimation');
        rightSvgLogo.classList.add('svgLogoAnimation');
      }, 10);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.menu li a');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        links.forEach(function (lnk) {
          lnk.classList.remove('active');
        });

        this.classList.add('active');
      });
    });
  });
}
