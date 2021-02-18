const express = require('express')
const app = express()

app.all('/opa',(req, res) => {
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
})


app.listen(8080, () => {
    console.log('Executando')
})