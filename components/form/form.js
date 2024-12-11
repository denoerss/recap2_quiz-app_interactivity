console.clear();

// Select form element
const form = document.querySelector('[data-js="form"]');

// Listen the form's submit event
form.addEventListener("submit", (event) => {
  // Prevent default submit behavior
  event.preventDefault();

  // Read all entered data from the input fields (question, answer, tags)
  const formData = new FormData(form);
  console.log("FORM DATA_", formData);

  // Save all entered data from the input fields in variables
  const question = formData.get("question");
  const answer = formData.get("answer");
  const tag = formData.get("tag");

  // Log all collected data
  console.log("QUESTION_", question);
  console.log("ANSWER_", answer);
  console.log("TAG_", tag);
});
