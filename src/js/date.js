const date = document.querySelector(`.fecha`);

document.addEventListener(`DOMContentLoaded`, () => {
  showMenu();
  closeMenu();
  actualDate();
});

function actualDate() {
  let dateDay = new Date().getFullYear();
  date.textContent = dateDay;
}
