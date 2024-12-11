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
  // Add classes to card elements

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("class");

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");

  const cardButtonAnswer = document.createElement("button");
  cardButtonAnswer.classList.add("card__button-answer");

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  const cardTagListItem = document.createElement("li");
  cardTagListItem.classList.add("card_tag-list-item");

  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");

  const bookmarkIcon = document.createElement("svg");
  bookmarkIcon.classList.add("bookmark__icon");
});
