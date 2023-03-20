let hex = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  return (backgroundColor.textContent = getRandomHexColor());
});
