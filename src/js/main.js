`use strict`;
const hamburguer = document.querySelector(`.hamburguer`);
const nav = document.querySelector(`.nav`);
const links = document.querySelectorAll(`.nav a`);
const date = document.querySelector(`.fecha`);

document.addEventListener(`DOMContentLoaded`, () => {
  showMenu();
  closeMenu();
  actualDate();
});

function showMenu() {
  hamburguer.addEventListener(`click`, () => {
    nav.classList.toggle(`ocultar`);
  });
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();

      const section = document.querySelector(e.target.attributes.href.value);
      changeSection(section);

      if (e.target.tagName === `A`) {
        nav.classList.add(`ocultar`);
      }
    });
  });
}

function changeSection(section) {
  section.scrollIntoView({
    behavior: `smooth`
  })
}

function actualDate() {
  let dateDay = new Date().getFullYear();
  date.textContent = dateDay;
}
