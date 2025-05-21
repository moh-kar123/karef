AOS.init();

const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const form = document.querySelector(".contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  successMsg.style.display = "block";

  form.reset();

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 5000);
});
