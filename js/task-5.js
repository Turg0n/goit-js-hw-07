function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btnelem = body.querySelector('.change-color');
const spanColor = body.querySelector('.color');
btnelem.addEventListener('click',() => {
body.style.backgroundColor = getRandomHexColor();
spanColor.style.color = getRandomHexColor();
});