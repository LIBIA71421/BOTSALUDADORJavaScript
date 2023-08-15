import sumar from "./sumador";
import multiplicar from "./multiplicador";

const name = document.querySelector("#name");
const form = document.querySelector("#saludar-form");
const sexo = document.querySelector("#boxGenero");
const edad = document.querySelector("#age");
const div = document.querySelector("#resp-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if(sexo.value == "masculino"){
    if(edad.value < 30){
      div.innerHTML = "Hola joven " + name.value;
    }else{
      div.innerHTML = "Hola Mr " + name.value;
    }
  }else{
    if(edad.value < 30){
      div.innerHTML = "Hola Miss " + name.value;
    }else{
      div.innerHTML = "Hola Mrs " + name.value;
    }
  }
});
