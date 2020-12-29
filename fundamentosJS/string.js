const escola = "Cod3r"

console.log(escola.charAt(1))
console.log(escola.charAt(-1))
console.log(escola.charAt(6))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('o'))

console.log(escola.substring(1))
console.log(escola.substring(1, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))