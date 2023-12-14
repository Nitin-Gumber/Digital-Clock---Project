const hours = document.querySelector("#hr");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

setInterval(function () {
  const date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
}, 1000);