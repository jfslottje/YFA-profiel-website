/** dit script wordt gebruikt in combinatie met de media query's in het css style sheet om een mobiel vriendelijk menu toe te voegen.**/
let menu_knop = document.querySelector(".menu-knop");
let menu_items = document.querySelectorAll(".menu-item");
let secties = document.querySelectorAll("section");
let nav = document.querySelector("nav");

/**de maximum breedte waar het mobiele menu actief moet zijn.**/
const breedte = 992;

/*
 *event listeners
 */

/* controleerd of er op een menu knop geklikt is.*/
menu_knop.addEventListener("click", Toggle);
menu_items.forEach(function (element) {
  element.addEventListener("click", Toggle);
});

/* controleerd of er op een sectie geklikt is.*/
secties.forEach(function (element) {
  element.addEventListener("click", Reset);
});

/* controleerd op een resize van de gehele pagina.*/
window.addEventListener("resize", Reset);

/**
 * De functie toggle veranderd de display style voor de menu items zodat het menu verborgen kan worden achter één menu knop.
 */
function Toggle() {
  /* controleer of de pagina klein genoeg is voor de menuknop.*/
  if (window.innerWidth < breedte) {
    if (menu_knop.style.display !== "none") {
      menu_knop.style.display = "none";
      nav.style.gridtemplaterows = "repeat(7, 1fr)";
      menu_items.forEach(function (element) {
        element.style.display = "grid";
      });
    } else {
      menu_knop.style.display = "grid";
      nav.style.gridtemplaterows = "1fr";
      menu_items.forEach(function (element) {
        element.style.display = "none";
      });
    }
  }
}

/**
 * reset het menu
 */
function Reset() {
  if (window.innerWidth < breedte) {
    menu_knop.style.display = "grid";
    nav.style.gridtemplaterows = "1fr";
    menu_items.forEach(function (element) {
      element.style.display = "none";
    });
  } else {
    menu_knop.style.display = "none";
    nav.style.gridtemplaterows = "repeat(7, 1fr)";
    menu_items.forEach(function (element) {
      element.style.display = "grid";
    });
  }
}

Reset();
