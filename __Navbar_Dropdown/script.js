console.log('this is dropdown')
const dropBtn = document.querySelector(".dropbtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

/* Close dropdown when clicking outside */
window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show");
  }
});
