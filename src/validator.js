const validator = {
  // inputValue entra como un array ordendo y depurado

 isValid : function(inputValue){

  let value = inputValue.reverse();

    for (var i=0; i<value.length; i++){
      
      if (i%2 != 0){
        value[i] = value[i] * 2;
        if (value[i] > 9){
          value[i] = parseInt(String(value[i]).charAt(0)) + parseInt(String(value[i]).charAt(1))

          
        }

      }
    
    }

    var sum = 0;

    for (var i=1; i<value.length; i++){
      sum += parseInt(value[i]);
    }
    sum = sum * 9 % 10;


    if (value[0] == sum){
      return true
    }else{
      return false
    }

},

  maskify : function(inputValueString){


      let cardNumString = inputValueString;

      let stringLength = cardNumString.length - 4;
  
      if (stringLength <= 0) console.log("error, no puede haber tarjeta con menos numeros");
  
      for (let i = 0; i <stringLength; i++) {
          cardNumString[i] = '#';
      }
  
      return cardNumString.join('');
  },


}



  
  export default validator;
