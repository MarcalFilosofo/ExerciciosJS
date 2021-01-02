function gerarNumerosEntre(min, max, proibidos){
    if(min > max){
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject)=>{
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        if(proibidos.includes(aleatorio)){
            reject('Numero repetido')
        } else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros){
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        await gerarNumerosEntre(1, 60, numeros)
    }
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .then(console.log)