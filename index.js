// phew… not a lot going on here. Please add some code!

console.clear();

// select bookmarkButton
const bookmarkButton = document.querySelector('[data-js="bookmark"]');

// add eventListener
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--activ");
  console.log(bookmarkButton);
});
