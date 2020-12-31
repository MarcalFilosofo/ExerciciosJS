const times = new Set()

times.add('Palmeiras')
times.add('Barcelona').add('Real Mardrid').add('Ajax')

console.log(times.size)
console.log(times.has('Palmeiras'))


const nomes = ['Gui', 'Ana', 'Bia', 'Cla', 'Gui']
const nomeSet = new Set(nomes)
console.log(nomeSet)