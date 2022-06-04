const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
});

function changeColor() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.startBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
