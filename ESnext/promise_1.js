let a = 11
console.log(a)


let p = new Promise(function(resolve, reject) {
    resolve(['Gui', 'Patata', 'Palmeiras'])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))