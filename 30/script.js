/*
    30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
    contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
    e os vetores criados.
*/

function calcularSomasLinhasColunas(matriz) {
    let somasLinhas = [];
    let somasColunas = [];

    for (let i = 0; i < matriz.length; i++) {
        let somaLinha = 0;
        let somaColuna = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            somaLinha += matriz[i][j];
            somaColuna += matriz[j][i];
        }
        somasLinhas.push(somaLinha);
        somasColunas.push(somaColuna);
    }

    return { somasLinhas, somasColunas };
}

let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let { somasLinhas, somasColunas } = calcularSomasLinhasColunas(M);

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

console.log("Vetor SL (somas das linhas):", somasLinhas.join(", "));

console.log("Vetor SC (somas das colunas):", somasColunas.join(", "));
