let valor // nao inicializada
console.log(valor)

valor = null // sem valor
console.log(valor)
//console.log(valor.toString()) // erro

const produto = {}
//console.log(produto.preco.a)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite isso
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null