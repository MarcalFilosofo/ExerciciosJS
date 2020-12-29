const A = [
    [1, 0, 2],
    [0, 3, 1],
    [1, 4, -1]
]

const B = [
    [0, 0, 3],
    [1, 2, 5],
    [-1, 0, 1]
]

const AxB = [[], [], []]
for (var i = 0; i <= 2; i++){
    for(var j = 0; j <= 2; j++){
        AxB[i][j] = ( A[i][0] * B[0][j] ) + (A[i][1] * B[1][j] ) + (A[i][2] * B[2][j] )
    }
}
console.log(A)
console.log(B)
console.log(AxB)
