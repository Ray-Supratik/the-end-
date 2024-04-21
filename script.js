// Function to update the timer
function updateTimer() {
  // Specify the start date
  var startDate = new Date("2024-02-27T00:00:00");

  // Get the current date and time
  var currentDate = new Date();

  // Calculate the difference in milliseconds
  var difference = currentDate - startDate;

  // Convert milliseconds to days, hours, minutes, and seconds
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the timer
  document.getElementById("timer").innerHTML =
    "Been in love for " +
    days +
    " days, " +
    hours +
    " hours, " +
    minutes +
    " minutes, " +
    seconds +
    " seconds";
}

// Update the timer every second
setInterval(updateTimer, 1000);

const heading = document.querySelector("h2");
const button = document.querySelector(".button");
const timer = document.getElementById("timer");
const heart = document.querySelector(".heart");
const answer = document.querySelector(".answer");
let count = 0;

button.addEventListener("click", () => {
  if (count === 0) {
    heading.textContent = "you wanna know why?";
    count++;
  } else if (count === 1) {
    heading.textContent = "I love you Bakaa🥺";
    answer.textContent =
      "bcoz I will always cling to you and never let u be alone in peace😤";
    answer.classList.remove("hide");
    button.classList.add("hide");
    heart.classList.remove("hide");
    timer.classList.remove("hide");
  }
});
