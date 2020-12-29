function fibonacci(quantidade){
    var resultado = [0, 1]
    console.log(resultado.length)
    for(var i = 2; i < quantidade; i++){
        resultado = (resultado[(resultado.length) -2])
    }
    //for _ in range(2, quantidade):
    return resultado
}
//fibonacci(20)
// var penultimo=0, ultimo=1;
// var termo = 4
// for(var count=3 ; count<=termo ; count++){
//     numero = ultimo + penultimo;
//     penultimo = ultimo;
//     ultimo = numero;
//    }
function fibonacci(termo){
    ;
    var penultimo=0, ultimo=1;
    var numero;
  
    if(termo<=2)
     numero = termo-1;
    else{
     count=3;
     while(count<=termo){
      numero= ultimo + penultimo;
      penultimo = ultimo;
      ultimo=numero;
      count++;
      console.log(numero)
     }
    }
  
    return numero;
  }
  console.log(fibonacci(4))