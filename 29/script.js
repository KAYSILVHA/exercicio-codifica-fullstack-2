/*
    29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
        a) da linha 4 de M;
        b) da coluna 2 de M;
        c) da diagonal principal;
        d) todos os elementos da matriz M.
    Escrever essas somas e a matriz.
*/

function calcularSomas(matriz) {
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaTotal += matriz[i][j];
            if (i === 3) {
                somaLinha4 += matriz[i][j];
            }
            if (j === 1) {
                somaColuna2 += matriz[i][j];
            }
            if (i === j) {
                somaDiagonalPrincipal += matriz[i][j];
            }
        }
    }

    return {
        somaLinha4,
        somaColuna2,
        somaDiagonalPrincipal,
        somaTotal
    };
}

let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let somas = calcularSomas(M);

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

console.log("Soma da linha 4 de M:", somas.somaLinha4);
console.log("Soma da coluna 2 de M:", somas.somaColuna2);
console.log("Soma da diagonal principal de M:", somas.somaDiagonalPrincipal);
console.log("Soma de todos os elementos da matriz M:", somas.somaTotal);
