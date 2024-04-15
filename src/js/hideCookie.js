export default function hideCookieBar() {
  let bar = document.querySelector('.cookieBar');
  let okButton = document.querySelector('.cookieOkBtn');

  okButton.addEventListener('click', function () {
    bar.style.display = 'none';
  });
}
