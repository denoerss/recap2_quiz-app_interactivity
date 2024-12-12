console.clear();
// 3. CREATE NEW CARDS

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
  const newQuestion = formData.get("question-area");
  const newAnswer = formData.get("answer-area");
  const newTag = formData.get("tag-input");

  // Log all collected data
  console.log("NEW QUESTION_", newQuestion);
  console.log("NEW ANSWER_", newAnswer);
  console.log("NEW TAG_", newTag);

  // Generate all DOM elements for a card
  // Add classes to DOM elements
  // Insert the form's data as text into DOM delements

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = newQuestion;

  const cardButtonAnswer = document.createElement("button");
  cardButtonAnswer.classList.add("card__button-answer");
  cardButtonAnswer.textContent = "Show answer";

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.textContent = newAnswer;

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  const cardTagListItem = document.createElement("li");
  cardTagListItem.classList.add("card__tag-list-item");
  cardTagListItem.textContent = newTag;

  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");

  const bookmarkIcon = document.createElement("svg");
  bookmarkIcon.classList.add("bookmark__icon");

  // Build DOM structure
  cardListItem.append(card);
  card.append(
    cardQuestion,
    cardButtonAnswer,
    cardAnswer,
    cardTagList,
    cardButtonBookmark
  );
  cardTagList.append(cardTagListItem);
  cardButtonBookmark.append(bookmarkButton, bookmarkIcon);

  // Append card to page, directly below the form
  const formContainer = form.parentNode; // parent element of form (<main></main>)
  formContainer.insertBefore(cardListItem, form.nextSibling);
  //                         ^ insert cardListItem, before nextSibling of form (<nav></nav>)
});

// 4. FORM FIELD TEXT COUNTER

function charCounter(textareaSelector) {
  //set max length
  const maxLength = 150;

  // create character counter
  const charCounter = document.createElement("span");
  charCounter.classList.add("char-counter");
  charCounter.textContent = `${maxLength} characters left`;

  // select textarea, set max length, insert counter
  const textarea = document.querySelector(textareaSelector);
  textarea.setAttribute("maxlength", maxLength);
  textarea.insertAdjacentElement("afterend", charCounter);

  // calculate and update left characters
  textarea.addEventListener("input", (event) => {
    const charsLeft = maxLength - event.target.value.length;
    charCounter.textContent = `${charsLeft} characters left`;
  });
}

// call character counters
const questionCounter = charCounter('[data-js="question-area"]');
const answerCounter = charCounter('[data-js="answer-area"]');
