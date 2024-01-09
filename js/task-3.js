function updateGreeting() {
  var inputValue = document.getElementById('name-input').value.trim();

  var outputSpan = document.getElementById('name-output');

  outputSpan.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}
