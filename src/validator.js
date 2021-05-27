const validator = {
  // inputValue entra como un array ordendo y depurado

 isValid : function(inputValue){

  let value = inputValue;
  //construye un bucle que itere el array en reversa
    //primero debe verificar cuales son los digitos que están en las posiciones pares e impares

    //los valores impares son almacenados en una variable 

    //los valores pares deben ser verificos si no son >10, en caso contrario se deben buscar su digito

    //los valores pares e impares deben ser sumados y esa suma se divide entre diez

    //si el mod es cero devolver TRUE (VALIDO) sino devolver FALSE (INVALIDO)



  return(value);

},

  maskify : function(inputValue){

      let array = inputValue;

      let arrayLength = array.length - 4;
  
      if (arrayLength <= 0) console.log("error, no puede haber tarjeta con menos");
  
      for (let i = 0; i <arrayLength; i++) {
          array[i] = '#';
      }
  
      return array.join('');
  },


}



  
  export default validator;
