function playOnKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running.
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
  setTimeout(() => key.classList.remove('playing'), 200);
}

window.addEventListener('keydown', playOnKey);