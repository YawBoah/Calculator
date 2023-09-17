// Get the input display element
const display = document.querySelector('input[name="display"]');

// Function to update the display value
function updateDisplay(value) {
  display.value = value;
}

// Function to handle button clicks
function handleButtonClick(buttonValue) {
  if (buttonValue === '=') {
    // Evaluate and display the result
    try {
      const result = eval(display.value);
      updateDisplay(result);
    } catch (error) {
      // Handle invalid expressions
      updateDisplay('Error');
    }
  } else if (buttonValue === 'AC') {
    // Clear the display
    updateDisplay('');
  } else if (buttonValue === 'DE') {
    // Delete the last character
    updateDisplay(display.value.slice(0, -1));
  } else {
    // Append the button value to the display
    updateDisplay(display.value + buttonValue);
  }
}

// Add click event listeners to all buttons
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.value;
    handleButtonClick(buttonValue);
  });
});
