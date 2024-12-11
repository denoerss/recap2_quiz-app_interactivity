// phew… not a lot going on here. Please add some code!

console.clear();

// TOOGLE BOOKMARK BUTTON

// select bookmarkButton
const bookmarkButton = document.querySelector('[data-js="button-bookmark"]');

// add eventListener for toggle
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active"); // toggle classes bookmark & bookmark--active
  console.log(bookmarkButton);
});

// TOGGLE ANSWER BUTTON

// select answerButton
const answerButton = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

// add eventListener for toggle
answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  console.log(cardAnswer);
});
