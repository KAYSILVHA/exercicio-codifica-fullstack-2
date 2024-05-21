/*
    26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5].
*/

let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let B = [
    [5, 4, 3, 2, 1],
    [10, 9, 8, 7, 6],
    [15, 14, 13, 12, 11]
];

let P = [];

for (let i = 0; i < 3; i++) {
    P[i] = [];
    for (let j = 0; j < 5; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log("Matriz Produto P:");
for (let i = 0; i < 3; i++) {
    console.log(P[i].join(" "));
}
