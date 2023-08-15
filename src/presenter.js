import sumar from "./sumador";
import multiplicar from "./multiplicador";

const name = document.querySelector("#name");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resp-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = "Hola " + name.value;
});
