const hamburguer = document.querySelector(`.hamburguer`);
const nav = document.querySelector(`.nav`);
const links = document.querySelectorAll(`.nav a`);

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
  