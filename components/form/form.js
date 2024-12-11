console.clear();

// Select form element
const form = document.querySelector('[data-js="form"]');

// Listen the form's submit event
form.addEventListener("submit", (event) => {
  // Prevent default submit behavior
  event.preventDefault();
});
