const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')


const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulher = funcionarios.filter(mulher => mulher.genero == 'F')
    const chinese = mulher.filter(chinese => chinese.pais == 'China')
    const ordernarSalario = chinese.reduce(menorSalario)
    console.log(ordernarSalario)
})