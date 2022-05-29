const container = document.querySelector("#counter");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector("#value");
valueNum.textContent = 0;

incrementBtn.addEventListener("click", () => {
  valueNum.textContent = new Number(valueNum.textContent) + 1;
});

decrementBtn.addEventListener("click", () => {
  valueNum.textContent = new Number(valueNum.textContent) - 1;
});
