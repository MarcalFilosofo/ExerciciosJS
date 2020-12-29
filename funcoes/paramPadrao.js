function soma(a, b, c) {
    a = a || 0
    b = b || 0
    c = c || 0
    return a + b + c
}

console.log(soma())
console.log(soma(3))
console.log(soma(1, 4, 9))
console.log(soma(5, null, 13))

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2())
console.log(soma2(0, 0, 0))
console.log(soma2(1, 2, 3))


function soma3(a = 0, b = 0, c = 0) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(0, 0, 0))
console.log(soma3(1, 2, 3))