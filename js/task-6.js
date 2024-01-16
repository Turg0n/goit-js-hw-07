function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputElem = document.querySelector("input[type=number]");
const createBtn = inputElem.nextElementSibling;
const destrBtn = createBtn.nextElementSibling;
const boxes = document.querySelector('#boxes');

function destroyBoxes() {
  boxes.innerHTML = '';
}

function createBoxes(amount){
  destroyBoxes();

  let startBox = 30;
  const step = 10;
  const divArr = [];
  for (let i=0; i< amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${startBox}px`;
    newBox.style.height = `${startBox}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    divArr.push(newBox);
    startBox += step;
  }
  boxes.append(...divArr);
}

createBtn.addEventListener('click', () => {
  if (inputElem.value >= 1 && inputElem.value <= 100){
    const amount = Number(inputElem.value)
    createBoxes(amount);
    inputElem.value = '';
  }
})

destrBtn.addEventListener('click',destroyBoxes);



