document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('change', function () {
    document.body.classList.toggle('menu-active', this.checked);
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

function hideCookieBar() {
  let bar = document.querySelector('.cookieBar');
  bar.style.display = 'none';
}
