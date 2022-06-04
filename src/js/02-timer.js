import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
// import 'flatpickr/dist/themes/dark.css';
import Notiflix from 'notiflix';

const refs = {
  userInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  seconds: document.querySelector('[data-seconds]'),
  minutes: document.querySelector('[data-minutes]'),
  hours: document.querySelector('[data-hours]'),
  days: document.querySelector('[data-days]'),
};

refs.startBtn.setAttribute('disabled', true);

const timer = {
  intervalValid: null,
  userDate: null,

  start() {
    this.intervalValid = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.userDate - currentTime;

      if (deltaTime <= 0) {
        this.stop();
        return;
      }

      const timeCounter = convertMs(deltaTime);
      changeUserInterface(timeCounter);
      refs.startBtn.setAttribute('disabled', true);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalValid);
    refs.startBtn.setAttribute('disabled', true);
    Notiflix.Notify.success('Time is over!');
  },

  checkDate(selectedDate) {
    const chooseDate = Date.parse(selectedDate);
    const dateNow = Date.now();

    if (chooseDate <= dateNow) {
      Notiflix.Notify.failure('Please choose a date in the future');
      calendar.open();
    } else {
      refs.startBtn.removeAttribute('disabled', '');

      this.userDate = chooseDate;
    }
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer.checkDate(selectedDates[0]);
  },
};
const calendar = flatpickr(refs.userInput, options);

function changeUserInterface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${addLeadingZero(days)}`;
  refs.hours.textContent = `${addLeadingZero(hours)}`;
  refs.minutes.textContent = `${addLeadingZero(minutes)}`;
  refs.seconds.textContent = `${addLeadingZero(seconds)}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
