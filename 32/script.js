/*
    32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
    cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
    matriz lida e a modificada.
*/

function criarMatrizAleatoria(rows, cols, min, max) {
    let matriz = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matriz.push(row);
    }
    return matriz;
}

let matrizAleatoria = criarMatrizAleatoria(5, 5, 1, 100);

console.log("Matriz Aleatória:");
matrizAleatoria.forEach(row => console.log(row.join(" ")));
