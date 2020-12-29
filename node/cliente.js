const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//console.log(contadorB.valor)
contadorA.inc()
contadorB.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)