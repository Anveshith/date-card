const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const curtain = document.querySelector(".curtain");

// Function for curtain transition
window.addEventListener("load", () => {
  curtain.style.opacity = "0";
  curtain.style.transition = "opacity 2s";
  setTimeout(() => {
    curtain.style.display = "none";
  }, 2000);
});

// Function to get random numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Button 'No' behavior
btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;

  // Randomize position
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";

  // Increase size on hover
  btnNo.style.transform = "scale(1.2)";
  btnNo.style.transition = "transform 0.3s";
});

btnNo.addEventListener("mouseleave", () => {
  btnNo.style.transform = "scale(1)";
});

// Button 'Yes' behavior
const resultLink = document.getElementById("result-link");

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  resultLink.classList.remove("hide"); // Show the surprise link after "Yes" is clicked
});



