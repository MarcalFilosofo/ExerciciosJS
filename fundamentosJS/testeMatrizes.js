const A = [
    [1, 2],
    [3, 4]
]

const B = [
    [-1, 3],
    [4, 2],
]
//console.log(A[1][1])

const AxB = [[], []]
for (var i = 0; i <= 1; i++){
    for(var j = 0; j <= 1; j++){
        //console.log(A[i][0] * B[0][j]) + (A[j][1] * B[i][1])
        AxB[i][j] = (A[i][0] * B[j][0]) + (A[i][1] * B[1][j])
        
    }
}
//console.log(A[0][0])
//console.log(B)
console.log(AxB)
