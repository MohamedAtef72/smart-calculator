const darkToggle = document.getElementById("dark-toggle");
const htmlEl = document.documentElement;
const toggleCircle = document.getElementById("toggle-circle");
const iconMode = document.getElementById("icon-mode");
const modeText = document.getElementById("mode-text");

let isDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

updateDarkMode();

darkToggle.addEventListener("change", () => {
  isDarkMode = darkToggle.checked;
  updateDarkMode();
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
});

function updateDarkMode() {
  if (isDarkMode) {
    htmlEl.classList.add("dark");
    toggleCircle.classList.add("translate-x-6");
    iconMode.className = "fa-solid fa-moon text-gray-700 text-xs";
    modeText.textContent = "Dark Mode";
  } else {
    htmlEl.classList.remove("dark");
    toggleCircle.classList.remove("translate-x-6");
    iconMode.className = "fa-solid fa-sun text-yellow-500 text-xs";
    modeText.textContent = "Light Mode";
  }

  darkToggle.checked = isDarkMode;
}


// Update Display
function updateDisplay(value = displayValue) {
  displayEl.textContent = value;
}

// Add to Display
function addToDisplay(input) {
  if (shouldResetDisplay) {
    displayValue = "";
    shouldResetDisplay = false;
  }
  
  // Handle operators
  if (['+', '-', '*', '/'].includes(input)) {
    if (currentValue && !isNaN(currentValue.slice(-1))) {
      currentValue += input;
      displayValue = currentValue;
      shouldResetDisplay = true;
    } else if (currentValue === "" && input === '-') {
      currentValue = input;
      displayValue = input;
    }
  }
  // Handle decimal point
  else if (input === '.') {
    const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
      if (displayValue === "0" || shouldResetDisplay) {
        displayValue = "0.";
        currentValue = currentValue.replace(/[\d\.]*$/, "0.");
      } else {
        displayValue += '.';
        currentValue += '.';
      }
      shouldResetDisplay = false;
    }
  }
  // Handle numbers
  else {
    if (displayValue === "0" || shouldResetDisplay) {
      displayValue = input;
      if (shouldResetDisplay) {
        currentValue += input;
      } else {
        currentValue = input;
      }
      shouldResetDisplay = false;
    } else {
      displayValue += input;
      currentValue += input;
    }
  }
  
  updateDisplay();
}

// Calculate Result
function calculate() {
  if (currentValue === "") return;
  
  try {
    // Replace display operators with actual operators
    const expression = currentValue.replace(/×/g, '*').replace(/÷/g, '/');
    
    // Validate expression
    if (/[\+\-\*\/]$/.test(expression)) {
      throw new Error("Incomplete expression");
    }
    
    const result = eval(expression);
    
    if (!isFinite(result)) {
      throw new Error("Division by zero");
    }
    
    displayValue = result.toString();
    currentValue = displayValue;
    shouldResetDisplay = true;
    
  } catch (error) {
    displayValue = "Error";
    currentValue = "";
    shouldResetDisplay = true;
  }
  
  updateDisplay();
}

// Clear Display
function clearDisplay() {
  currentValue = "";
  displayValue = "0";
  shouldResetDisplay = false;
  updateDisplay();
}

// Clear Entry
function clearEntry() {
  displayValue = "0";
  updateDisplay();
}

// Backspace
function backspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
    currentValue = currentValue.slice(0, -1);
  } else {
    displayValue = "0";
    currentValue = "";
  }
  updateDisplay();
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  
  if (e.key >= "0" && e.key <= "9") {
    addToDisplay(e.key);
  } else if (e.key === ".") {
    addToDisplay(".");
  } else if (e.key === "+") {
    addToDisplay("+");
  } else if (e.key === "-") {
    addToDisplay("-");
  } else if (e.key === "*") {
    addToDisplay("*");
  } else if (e.key === "/") {
    addToDisplay("/");
  } else if (e.key === "Enter" || e.key === "=") {
    calculate();
  } else if (e.key === "Escape" || e.key.toLowerCase() === "c") {
    clearDisplay();
  } else if (e.key === "Backspace") {
    backspace();
  }
});

// Initialize display
updateDisplay();