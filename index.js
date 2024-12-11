// phew… not a lot going on here. Please add some code!

console.clear();

// TOOGLE BOOKMARK BUTTON

// select bookmarkButton
const bookmarkButton = document.querySelector('[data-js="button-bookmark"]');

// add eventListener for toggle
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active"); // toggle classes bookmark & bookmark--active
});

console.log("BOOKMARK BUTTON_", bookmarkButton);

// TOGGLE ANSWER BUTTON

// select answerButton and cardAnswer
const answerButton = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

// add eventListener for toggle
answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  // toggle textContent
  if (cardAnswer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});

console.log("ANSWER BUTTON_", answerButton);
console.log("CARD ANSWER_", cardAnswer);
