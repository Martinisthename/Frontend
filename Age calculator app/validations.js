
function validateInputs() {
  const dayInput = document.getElementById('dayInput');
  const monthInput = document.getElementById('monthInput');
  const yearInput = document.getElementById('yearInput');

  const dayWarning = document.getElementById('dayWarning');
  const monthWarning = document.getElementById('monthWarning');
  const yearWarning = document.getElementById('yearWarning');

  let isValid = true;

  // Reset warnings
  dayWarning.textContent = '';
  monthWarning.textContent = '';
  yearWarning.textContent = '';

  if (dayInput.value === '') {
    dayWarning.textContent = 'Field is required.';
    dayInput.classList.add('warningInput');

    isValid = false;
  }

  if (monthInput.value === '') {
    monthWarning.textContent = 'Field is required.';
    monthInput.classList.add('warningInput');
    isValid = false;
  }

  if (yearInput.value === '') {
    yearWarning.textContent = 'Field is required.';
    yearInput.classList.add('warningInput');
    isValid = false;
  }

  return isValid;
}
