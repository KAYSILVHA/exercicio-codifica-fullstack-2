/*
    24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.
*/

function contarNegativos(linha) {
    return linha.filter(elemento => elemento < 0).length;
}

function criarVetorNegativos(matriz) {
    let vetorC = matriz.map(contarNegativos);
    return vetorC;
}

// Definição da matriz M[1..6,1..8]
let matriz = [
    [1, -2, 3, 4, -5, 6, 7, -8],
    [-1, 2, -3, 4, 5, -6, -7, 8],
    [9, -10, 11, -12, 13, 14, -15, 16],
    [17, 18, -19, 20, 21, -22, 23, 24],
    [25, -26, 27, 28, -29, 30, 31, -32],
    [-33, 34, 35, -36, 37, 38, -39, 40]
];

let vetorC = criarVetorNegativos(matriz);

console.log("Vetor C com a quantidade de elementos negativos por linha:", vetorC);