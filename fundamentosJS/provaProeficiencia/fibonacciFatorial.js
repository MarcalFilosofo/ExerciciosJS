function fibonacci(quantidade){
    if(quantidade < 2){
        resposta = 1
    }else{
        var resposta = [0, 1]
        for (var i = 2; i < quantidade; i++){
            resposta.push(
                    resposta[resposta.length -1] + resposta[resposta.length -2]
            )
        }
    }
    return resposta
}
function fatorial(n){
    var resposta = 1
    for(var i = n; i > 1; i--){
        resposta *= i
    }
    return resposta
}
console.log(fibonacci(fatorial(3)))

