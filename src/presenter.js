import sumar from "./sumador";
import multiplicar from "./multiplicador";

const name = document.querySelector("#name");
const form = document.querySelector("#saludar-form");
const sexo = document.querySelector("#boxGenero");
const div = document.querySelector("#resp-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if(sexo.value == "masculino"){
    div.innerHTML = "Hola Mr " + name.value;
  }else{
    div.innerHTML = "Hola Mrs " + name.value;
  }
});
