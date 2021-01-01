const fs = require('fs')
const path = require('path')

const dados = path.join(__dirname, 'dados.txt')

//const exibirConteudo = (_, conteudo) => conteudo.toString()



function imprimirArquivo(caminho) {
    return new Promise((resolve, reject) =>{
        const arquivo = fs.readFileSync(caminho, 'utf8')
        resolve(arquivo)
    })
}

imprimirArquivo(dados)
    .then(console.log)