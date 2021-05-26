import {validator} from './validator' ;

//Se añade un Event listener...
document.getElementById("confirmar").addEventListener("click", getValueInput);

//con la función para atrapar el numero en un array que incluye regex para omitir no digitos...
function getValueInput() {
  let inputValue = Array.from(document.getElementById("cc-number").value.replace(/\D/g, '')); 

  validator(inputValue);

  


}





