function playOnKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  playSound(audio,key);
}

function playOnClk() {
  var key = this;
  var data_key = key.getAttribute('data-key');
  var audio = document.querySelector(`audio[data-key="${data_key}"]`);
  playSound(audio,key);
}

function playSound(audio,key) {
  if (!audio) return; //stop the function from running.
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
  setTimeout(() => key.classList.remove('playing'), 200);
}

window.addEventListener('keydown', playOnKey);

const btn = document.querySelectorAll('.key');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',playOnClk);
}