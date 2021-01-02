function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function() {
            //console.log("Executando Promise")
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(esperarPor)
//     .then(esperarPor)
//     .then(esperarPor)

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function exec(){
    let valor = await retornarValor()
    await esperarPor(1000)
    console.log(`Async/Await ${valor}`)
    await esperarPor(1000)
    console.log(`Async/Await ${valor + 1}`)
    await esperarPor(1000)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}

exec().then(console.log)