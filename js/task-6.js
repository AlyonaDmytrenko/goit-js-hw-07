function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', function () {
    const amount = parseInt(input.value);

    if (validateInput(amount)) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);
});

function validateInput(value) {
  return !isNaN(value) && value >= 1 && value <= 100;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  clearBoxes(); // Clear existing boxes

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function clearBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

function destroyBoxes() {
  clearBoxes();
}
