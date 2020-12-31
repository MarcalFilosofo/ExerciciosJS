for (let letra of "Guilherme") {
    console.log(letra)
}

const assuntosECMA = ['Map', 'Set', 'Promisse']

for(let i in assuntosECMA){
    console.log(assuntosECMA[i])
}

for(let i of assuntosECMA){
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (let i of assuntosMap) {
    console.log(i)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [cv, vl] of assuntosMap.entries()) {
    console.log(cv, vl)
}

const s = new Set(['a', 'b', 'c'])

for(let letra of s){
    console.log(letra)
}