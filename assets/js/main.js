const hamburgerButton = document.getElementById("hamburger-button");
const offCanva = document.getElementById("offcanva");

hamburgerButton.addEventListener("click", () => {
  const isActive = hamburgerButton.classList.contains("is-active");

  if (isActive) {
    hamburgerButton.classList.remove("is-active");
    offCanva.style.left = "-120%";
  } else {
    hamburgerButton.classList.add("is-active");
    offCanva.style.left = "0";
  }
});







