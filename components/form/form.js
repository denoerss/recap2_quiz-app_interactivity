console.clear();
// 3. CREATE NEW CARDS

const form = document.querySelector('[data-js="form"]');
const questionArea = document.querySelector('[data-js="question-area"]');
questionArea.focus();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Read all entered data from the input fields (question, answer, tags)
  const formData = new FormData(form);
  console.log("FORM DATA_", formData);

  // Save all entered data from the input fields in variables
  const question = formData.get("question");
  const answer = formData.get("answer");
  const tag = formData.get("tag");

  // Log all collected data
  console.log("NEW QUESTION_", question);
  console.log("NEW ANSWER_", answer);
  console.log("NEW TAG_", tag);

  // Generate all DOM elements for a card
  // Add classes to DOM elements
  // Insert the form's data as text into DOM delements

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = question;

  const cardButtonAnswer = document.createElement("button");
  cardButtonAnswer.classList.add("card__button-answer");
  cardButtonAnswer.textContent = "Show answer";

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer--active");
  cardAnswer.textContent = answer;

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  const cardTagListItem = document.createElement("li");
  cardTagListItem.classList.add("card__tag-list-item");
  cardTagListItem.textContent = tag;

  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.innerHTML = `
  <svg
    class="bookmark__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 24 24"
  >
    <path
    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
    />
  </svg>`;

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
  cardButtonBookmark.append(bookmarkButton);

  // Append card to page, directly below the form
  const formContainer = form.parentNode; // parent element of form (<main></main>)
  formContainer.insertBefore(cardListItem, form.nextSibling);
  //                         ^ insert cardListItem, before nextSibling of form (<nav></nav>)

  form.reset();
  questionArea.focus();
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
