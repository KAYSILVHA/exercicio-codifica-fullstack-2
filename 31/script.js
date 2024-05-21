/*
    31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
    Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
    todos os elementos de V diferentes de A. Mostre os resultados.
*/

function contarValoresEcriarMatrizX(A, matriz) {
    let count = 0;
    let X = [];

    for (let i = 0; i < matriz.length; i++) {
        let row = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                count++;
            } else {
                row.push(matriz[i][j]);
            }
        }
        X.push(row);
    }

    return { count, X };
}

function criarMatrizAleatoria(rows, cols, max) {
    let matriz = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * (max + 1)));
        }
        matriz.push(row);
    }
    return matriz;
}

let A = 5; 
let V = criarMatrizAleatoria(30, 30, 10);

let { count, X } = contarValoresEcriarMatrizX(A, V);

console.log("Matriz V(30x30):");
V.forEach(row => console.log(row.join(" ")));

console.log("\nValores iguais a A (", A, ") na matriz V:", count);

console.log("\nMatriz X (todos os elementos de V diferentes de A):");
X.forEach(row => console.log(row.join(" ")));
