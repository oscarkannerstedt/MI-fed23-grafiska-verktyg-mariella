export default function soundPlayer() {
  document
    .getElementById('playImageBtn')
    .addEventListener('click', function () {
      var audio = document.getElementById('audioClip');
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
}
