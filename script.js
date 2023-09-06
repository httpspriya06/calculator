const display = document.getElementById("display");
let displayInputs = "";

// shows the result in display box
function getInput(inp) {
  const input = inp;
  displayInputs += input;
  display.textContent = displayInputs;
}

// delete function will trim the display or result by 1
function deleteDigit() {
  display.textContent = display.textContent.slice(0, -1);
  // display.innerHTML = display.innerHTML.slice(0, -1);
  displayInputs = "";
}

// it clear all display to default
function clearDisplay() {
  display.textContent = "";
  displayInputs = "";
}

function calculateResult() {
  // const display = document.getElementById("display");
  try {
    let result = eval(displayInputs);
    if (result.toString().length > 6) {
      display.textContent = displayInputs = "Error";
    } else {
      display.textContent = displayInputs = result;
    }
  } catch (error) {
    display.textContent = displayInputs = "Error";
  }
}
