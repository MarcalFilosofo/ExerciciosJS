const fs = require('fs')
const path = require('path')

const dados = path.join(__dirname, 'dados.txt')

//const exibirConteudo = (_, conteudo) => conteudo.toString()



function imprimirArquivo(caminho) {
    return new Promise((resolve, reject) =>{
        const arquivo = fs.readFile(caminho, function(_, content){
            resolve(content.toString())
        })
 
    })
}

imprimirArquivo(dados)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor fianl é: ${conteudo}`)
    .then(console.log)