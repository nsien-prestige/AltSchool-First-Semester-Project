const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function deleteLastChar() {
    display.value = display.value.toString().slice(0,-1)
}

function calculate() {
    display.value = eval(display.value)
}

function clearDisplay() {
  display.value = ''
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Backspace") {
        e.preventDefault();
        deleteLastChar();
    }
});

document.addEventListener("keydown", function(e) {
  if (!isNaN(e.key)) {  
    appendToDisplay(e.key);
  }
});

document.addEventListener("keydown", function(e){
  if (e.key === 'enter') {
    e.preventDefault();
    display.value = eval(display.value)
  }
});

function addToHistory(expression, result) {
  const historyList = document.getElementById('history-list');
  const item = document.createElement('div');
  item.className = 'history-item';
  item.innerHTML = `
    <span>${expression} = ${result}</span>
    <button onclick="deleteHistoryItem(this)">X</button>
  `;
  historyList.appendChild(item);
}

function deleteHistoryItem(button) {
  const item = button.parentElement;
  item.remove();
}

function clearHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';}

  function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression, result);  
  } catch {
    display.value = "Error";
  }
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calculate();  
  }
});

