let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

function updateGreeting() {
  let inputValue = nameInput.value.trim();

  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}

nameInput.addEventListener('input', updateGreeting);
