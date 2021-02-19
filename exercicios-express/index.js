const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param')

app.post('/usuario', usuarioApi.salvar)
app.get('usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extented: true }))

app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
    console.log("Inicio")
    next()
}) 

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo ${req.query.complero} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res, next) => {
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {
    //     res.send(corpo)
    // })

    res.send(req.body)
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.get('/opa',(req, res, next) => {
    // res.send('Welcome')
    
    // res.json({
    //     name: 'iPad 32GB',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    res.json([{
        id: 7,
        name: 'Ana',
        position: 1
    }, {
        id: 8,
        name: 'Mateus',
        position: 2
    }])
    console.log("durante")
    next()
})

app.use((req, res, next) => {
    console.log("Serei chamado?")
    // next()
}) 


app.listen(8080, () => {
    console.log('Executando')
})