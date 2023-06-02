const calculateButton = document.getElementById('calculateButton');
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

let isButtonClicked = false; // Flag variable to track button state

calculateButton.addEventListener('click', toggleButtonState);


function toggleButtonState() {
  if (validateInputs()) {
    if (isButtonClicked) {
      // Reset everything to the original state

      // Clear input values
      dayInput.value = '';
      monthInput.value = '';
      yearInput.value = '';

      // Reset result elements
      document.getElementById('YY').textContent = '--';
      document.getElementById('MM').textContent = '--';
      document.getElementById('DD').textContent = '--';

      // Reset button color
      calculateButton.style.backgroundColor = '';

      isButtonClicked = false;
    } else {
      // Calculate age

      const birthDate = new Date(
        yearInput.value,
        monthInput.value - 1,
        dayInput.value
      );

      const currentDate = new Date();

      const ageInMilliseconds = currentDate - birthDate;
      const ageInSeconds = ageInMilliseconds / 1000;
      const ageInMinutes = ageInSeconds / 60;
      const ageInHours = ageInMinutes / 60;
      const ageInDays = ageInHours / 24;
      const ageInMonths = ageInDays / 30.436875; // Approximate average days in a month
      const ageInYears = ageInDays / 365.25; // Approximate average days in a year

      const years = Math.floor(ageInYears);
      const months = Math.floor(ageInMonths % 12);
      const days = Math.floor(ageInDays % 30.436875);

      document.getElementById('YY').textContent = years;
      document.getElementById('MM').textContent = months;
      document.getElementById('DD').textContent = days;

      removeLetterS('YY');
      removeLetterS('MM');
      removeLetterS('DD');

      // Change button color to custom color
      calculateButton.style.backgroundColor = 'var(--Purple)';

      isButtonClicked = true;
    }
  }
}

function removeLetterS(id) {
  const element = document.getElementById(id);
  const text = element.parentNode.innerText.trim();
  const number = parseInt(element.textContent);

  if (number == 1 && text.endsWith('s')) {
    element.parentNode.innerHTML = element.parentNode.innerHTML.slice(0, -1);
  }
  else if (number != 1 && !text.endsWith('s')) {
    element.parentNode.innerHTML += 's';
  }
}
