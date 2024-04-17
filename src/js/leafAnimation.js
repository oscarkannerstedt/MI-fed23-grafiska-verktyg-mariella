function setupScrollToggle() {
  window.addEventListener('scroll', function () {
    const leafButton = document.querySelector('.desktop-leaf-button');

    if (window.pageYOffset > 100) {
      leafButton.classList.add('show-desktop-leaf-button');
    } else {
      leafButton.classList.remove('show-desktop-leaf-button');
    }
  });
}

export { setupScrollToggle };
