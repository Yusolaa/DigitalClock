const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = 'AM';

  if (hours >= 18 || hours < 7) {
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }

  if (hours > 12) {
    hours = hours - 12;
    ampm = 'PM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  hourEl.innerText = hours;
  minuteEl.innerText = minutes;
  secondEl.innerText = seconds;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

const speakButton = document.getElementById('speakButton');

speakButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = `The time is ${hourEl.textContent} ${minuteEl.textContent} ${ampmEl.textContent}`;
  speechSynthesis.speak(utterance);
});
