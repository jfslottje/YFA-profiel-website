/** dit script wordt gebruikt in combinatie met de media query's in het css style sheet om een mobiel vriendelijk menu toe te voegen.**/
let menu_knop = document.querySelector(".menu-knop");
let menu_items = document.querySelectorAll(".menu-item");
let secties = document.querySelectorAll("section");
/**de maximum breedte waar het mobiele menu actief moet zijn.**/
let breedte = 992;

/*
 *event listeners
 */

/* controleerd op een resize van de gehele pagina.*/
window.addEventListener("resize", Reset);

/* controleerd of er op een menu knop geklikt is.*/
menu_knop.addEventListener("click", Toggle);
menu_items.forEach(function (element) {
  element.addEventListener("click", Toggle);
});

/* controleerd of er op een sectie geklikt is.*/
secties.forEach(function (element) {
  element.addEventListener("click", Reset);
});

/**
 * De functie toggle veranderd de display style voor de menu items zodat het menu verborgen kan worden achter één menu knop.
 */
function Toggle() {
  /* controleer of de pagina klein genoeg is voor de menuknop.*/
  if (window.innerWidth < breedte) {
    if (menu_knop.style.display !== "none") {
      menu_knop.style.display = "none";
      menu_items.forEach(function (element) {
        element.style.display = "flex";
      });
    } else {
      menu_knop.style.display = "flex";
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
    menu_knop.style.display = "flex";
    menu_items.forEach(function (element) {
      element.style.display = "none";
    });
  } else {
    menu_knop.style.display = "none";
    menu_items.forEach(function (element) {
      element.style.display = "flex";
    });
  }
}

Reset();
