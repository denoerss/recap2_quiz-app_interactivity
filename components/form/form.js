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
  const newQuestion = formData.get("question");
  const newAnswer = formData.get("answer");
  const newTag = formData.get("tag");

  // Log all collected data
  console.log("NEW QUESTION_", newQuestion);
  console.log("NEW ANSWER_", newAnswer);
  console.log("NEW TAG_", newTag);

  // Generate all DOM elements for a card
  const cardListItem = document.createElement("li");
  const card = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardButtonAnswer = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTagListItem = document.createElement("li");
  const cardButtonBookmark = document.createElement("div");
  const bookmarkButton = document.createElement("button");
  const bookmarkIcon = document.createElement("svg");
});
