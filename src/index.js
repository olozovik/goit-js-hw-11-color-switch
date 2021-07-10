import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', runChangingColors);

let isChanging = false;
let timerId = null;

function runChangingColors() {
  if (isChanging === true) {
    return;
  }

  isChanging = true;
  refs.start.disabled = true;

  timerId = setInterval(() => {
    const randomIdx = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomIdx];
  }, 1000);

  stopChangingColors();
}

function stopChangingColors() {
  refs.stop.addEventListener('click', () => {
    clearInterval(timerId);
    isChanging = false;
    refs.start.disabled = false;
  });
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
