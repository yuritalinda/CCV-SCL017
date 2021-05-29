import validator from './validator.js' ;

const checked = document.getElementsByTagName("img")[1];
const wrong = document.getElementsByTagName("img")[2];

//Se añade evento de click para confirmr 
document.getElementById("confirmar").addEventListener("click", getValueInput);

//Función para atrapar el numero de tarjeta que incluye el algoritmo de luhn
function getValueInput() {
  let inputValue = Array.from(document.getElementById("cc-number").value.replace(/\D/g, '')); 


  let luhn = validator.isValid(inputValue);
  console.log(luhn);
  


    if (luhn == true){
      console.log(checked);
      checked.classList.remove("hide");
    } else if (luhn == false) {
      console.log(wrong);
      wrong.classList.remove("hide");
    }

};

//evento de teclado para enmascarar

document.getElementById("confirmar").addEventListener("click", maskValueInput);

// funcion para enmascarar el numero
function maskValueInput(){
  
  let inputValueString = Array.from(document.getElementById("cc-number").value.replace(/\D/g, ''));
  
  let numMask =  validator.maskify(inputValueString);

  console.log(numMask);
  

} 

// evento de click para Volver

  document.getElementById("volver").addEventListener('click',volver);

  //funcion para quitar los iconos de chequeo al resetear

function volver(){

    checked.classList.add("hide");
    wrong.classList.add("hide")
    

}
