const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const countButton = document.querySelector("#count");
let count = 0;

console.log(count);
console.log(startButton);

const startTimer = () => {
  const time = setInterval(() => {
    count = count + 1;
    countButton.innerHTML = count;
  }, 1000);
};

startButton.addEventListener("click", startTimer);
