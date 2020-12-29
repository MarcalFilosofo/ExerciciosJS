const notas = [6, 7, 8, 9.4, 8.1, 6.7, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Guilherm",
    sobrenome: "MArcal",
    idade: 19
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}