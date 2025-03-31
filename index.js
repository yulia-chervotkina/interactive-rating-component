const ratingModal = document.getElementById("rating-container");
const thankYouModal = document.getElementById("thank-you-container");
const submitButton = document.getElementById("sub-button");
const rankingButtons = document.querySelectorAll(".number");
const selectedNumber = document.getElementById("selected-number");

window.addEventListener("load", () => {
  thankYouModal.style.display = "none";
  submitButton.setAttribute("disabled", true);
});

rankingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rankingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedNumber.innerText = button.dataset.value;
    submitButton.removeAttribute("disabled");
  });
});

submitButton.addEventListener("click", () => {
  ratingModal.style.display = "none";
  thankYouModal.style.display = "flex";
});
