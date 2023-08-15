import sumar from "./sumador";
import multiplicar from "./multiplicador";

const name = document.querySelector("#name");
const form = document.querySelector("#saludar-form");
const sexo = document.querySelector("#boxGenero");
const edad = document.querySelector("#age");
const div = document.querySelector("#resp-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  console.log(horaActual);
  let saludo = "";
  if(horaActual >= 0 & horaActual <=4){
    saludo = "Buenas noches";
  }if(horaActual >= 5 & horaActual <=13){
    saludo = "Buen día";
  }if(horaActual >= 14 & horaActual <=18){
    saludo = "Buenas tardes";
  }if(horaActual >= 19 & horaActual <=23){
    saludo = "Buenas noches";
  }


  if(sexo.value == "masculino"){
    if(edad.value < 30){
      div.innerHTML = saludo + " joven " + name.value;
    }else{
      div.innerHTML = saludo + " Mr " + name.value;
    }
  }else{
    if(edad.value < 30){
      div.innerHTML = saludo + " Miss " + name.value;
    }else{
      div.innerHTML = saludo + " Mrs " + name.value;
    }
  }
});
