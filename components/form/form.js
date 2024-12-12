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

// FOR QUESTION AREA
const questionCounter = document.createElement("span");
questionCounter.classList.add("question-counter");
questionCounter.setAttribute("data-js", "question-counter");
questionCounter.textContent = "150 characters left";

const questionArea = document.querySelector('[data-js="question-area"]');
questionArea.insertAdjacentElement("afterend", questionCounter);
questionArea.setAttribute("maxlength", "150");
const maxInputLength = questionArea.getAttribute("maxlength");

questionArea.addEventListener("input", (event) => {
  const questionLength = event.target.value.length;
  const leftCharactersQuestion =
    Number(maxInputLength) - Number(questionLength);
  questionCounter.textContent = `${leftCharactersQuestion} characters left`;
});

// FOR ANSWER AREA
const answerCounter = document.createElement("span");
answerCounter.classList.add("answer-counter");
answerCounter.setAttribute("data-js", "answer-counter");
answerCounter.textContent = "150 characters left";

const answerArea = document.querySelector('[data-js="answer-area"]');
answerArea.insertAdjacentElement("afterend", answerCounter);
answerArea.setAttribute("maxlength", "150");

answerArea.addEventListener("input", (event) => {
  const answerLength = event.target.value.length;
  const leftCharactersAnswer = Number(maxInputLength) - Number(answerLength);
  answerCounter.textContent = `${leftCharactersAnswer} characters left`;
});
