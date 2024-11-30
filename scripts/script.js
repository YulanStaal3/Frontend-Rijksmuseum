// JavaScript Document
console.log("hi");

// Selecteer de tweede button (hamburgerbutton) en de nav
const hamburgerButton = document.querySelector("header button:nth-of-type(1)");
const navMenu = document.querySelector("header nav");

// Voeg een kliklistener toe aan de hamburgerbutton
hamburgerButton.addEventListener("click", () => {
  // Toggle de "toonMenu" class op de nav
  navMenu.classList.toggle("toonMenu");

  // Toggle de "open" class op de hamburgerbutton
  hamburgerButton.classList.toggle("open");
});