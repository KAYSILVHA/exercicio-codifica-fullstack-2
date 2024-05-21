/*
    34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
    cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
    multiplicações.
*/


function multiplicarLinhasPelaDiagonal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let elementoDiagonal = matriz[i][i];
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= elementoDiagonal;
        }
    }
    return matriz;
}

function criarMatrizAleatoria(rows, cols, min, max) {
    let matriz = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.random() * (max - min + 1) + min);
        }
        matriz.push(row);
    }
    return matriz;
}

let matriz = criarMatrizAleatoria(50, 50, 1, 100);

let matrizResultado = multiplicarLinhasPelaDiagonal(matriz);

console.log("Matriz Resultante:");
matrizResultado.forEach(row => console.log(row.join(" ")));
