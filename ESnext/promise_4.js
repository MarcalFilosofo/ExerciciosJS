function gerarNumerosEntre(min, max, tempo){
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve =>{
        setTimeout(function() {
            const fator = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(2, 45, 4000),
        gerarNumerosEntre(5, 10, 5000),
        gerarNumerosEntre(6, 8, 3000)
    ])
}


console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })
