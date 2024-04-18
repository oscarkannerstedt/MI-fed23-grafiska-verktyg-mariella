import hideCookieBar from './hideCookie.js';
import toggleMenu from './toggle-menu.js';
import soundPlayer from './soundPlayer.js';
import menuScrollTo from './menuScrollTo.js';
import disableButton from './contactForm.js';
import { setupScrollToggle } from './leafAnimation.js';

document.addEventListener('DOMContentLoaded', function () {
  setupScrollToggle();
});

hideCookieBar();
toggleMenu();
menuScrollTo();
soundPlayer();
disableButton();
