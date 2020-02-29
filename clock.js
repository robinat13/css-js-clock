const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

setClock();

setInterval(() => {
  setClock();
}, 1000);

function setClock() {
  const currentDate = new Date();
  const secondRatio = (currentDate.getSeconds() / 60) * 360;
  const minuteRatio = (currentDate.getMinutes() / 60) * 360;
  const hourRatio = (currentDate.getHours() / 12) * 360;
  //   console.log(secondRatio, minuteRatio, hourRatio);
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio);
}
