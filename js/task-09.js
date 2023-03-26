// Достаем необходимые елементы с DOM
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

//  функция случайного color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Функция по  button click event
function handleChangeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
// Обновляем span 
  colorSpan.textContent = color;
}
// Добавляем слушателя на кнопку
changeButton.addEventListener('click', handleChangeColor);


