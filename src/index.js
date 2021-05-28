import validator from './validator.js' ;

//Se añade un Event listener...
document.getElementById("confirmar").addEventListener("click", getValueInput);

//con la función para atrapar el numero en un array que incluye regex para omitir no digitos...
function getValueInput() {
  let inputValue = Array.from(document.getElementById("cc-number").value.replace(/\D/g, '')); 


  

  let prueba = validator.isValid(inputValue);

    console.log(prueba);


};

//evento de teclado



// funcion para enmascarar el numero
function maskValueInput(){
  
  let inputValueString = document.getElementById("cc-number").value.replace(/\D/g, '');
  
  let prueba2 = validator.maskify(inputValueString);
  
  console.log(prueba2); 

} 





