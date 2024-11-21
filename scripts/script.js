// JavaScript Document
console.log("hi");

const menuButton = document.querySelector ("header > button");
const deNav = document.querySelector ("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = toggleMenu; 

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu () {
  deNav.classList.add("toonMenu");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op

const sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav

function sluitMenu() {
  deNav.classList.remove("toonMenu")
}