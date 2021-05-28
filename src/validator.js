const validator = {
  // inputValue entra como un array ordendo y depurado

 isValid : function(inputValue){

  let value = inputValue.reverse();
  //construye un bucle que itere el array en reversa
    //primero debe verificar cuales son los digitos que están en las posiciones pares e impares

    //los valores impares son almacenados en una variable 

    //los valores pares deben ser verificos si no son >10, en caso contrario se deben buscar su digito

    //los valores pares e impares deben ser sumados y esa suma se divide entre diez

    //si el mod es cero devolver TRUE (VALIDO) sino devolver FALSE (INVALIDO)

    for (var i=0; i<value.length; i++){
      
      if (i%2 != 0){
        value[i] = value[i] * 2;
        if (value[i] > 9){
          value[i] = parseInt(String(value[i]).charAt(0)) + parseInt(String(value[i]).charAt(1))

          console.log(value);
        }
      }
    }

    var sum = 0;

    for (var i=1; i<value.length; i++){
      sum += parseInt(value[i]);
    }
    sum = sum * 9 % 10;

    console.log(sum , value);

    if (value[0] == sum){
      return true
    }else{
      return false
    }

},

  maskify : function(inputValueString){

    console.log(inputValueString);

      let cardNumString = inputValueSting;

      let stringLength = cardNumString.length - 4;
  
      if (stringLength <= 0) console.log("error, no puede haber tarjeta con menos");
  
      for (let i = 0; i <stringLength; i++) {
          cardNumString[i] = '#';
      }
  
      return cardNumString.join('');
  },


}



  
  export default validator;
