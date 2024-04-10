document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('change', function () {
    document.body.classList.toggle('menu-active', this.checked);
  });
});
