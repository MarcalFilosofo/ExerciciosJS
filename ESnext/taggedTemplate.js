function tag(partes, ...args) {
    console.log(partes)
    console.log(args)
    return 'Outra string'
}

const aluno = 'Gui'
const situation = 'Aprovado'
console.log(tag `${aluno} está ${situation}`)