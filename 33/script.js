/*
    33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
    elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

function mediaDiagonalSecundaria(matriz) {
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        somaDiagonalSecundaria += matriz[i][matriz.length - 1 - i];
    }
    return somaDiagonalSecundaria / matriz.length;
}

function multiplicarDiagonalPrincipalPorMediaSecundaria(matriz) {
    let mediaSecundaria = mediaDiagonalSecundaria(matriz);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i][i] *= mediaSecundaria;
    }
    return matriz;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizResultado = multiplicarDiagonalPrincipalPorMediaSecundaria(matriz);

console.log("Matriz Original:");
matriz.forEach(row => console.log(row.join(" ")));

console.log("\nMatriz Resultante:");
matrizResultado.forEach(row => console.log(row.join(" ")));
