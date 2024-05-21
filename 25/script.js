/*
    25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.
*/


function somarColunas(matriz) {
    let numLinhas = matriz.length;
    let numColunas = matriz[0].length;
    let somaColunas = Array(numColunas).fill(0);

    for (let col = 0; col < numColunas; col++) {
        for (let lin = 0; lin < numLinhas; lin++) {
            somaColunas[col] += matriz[lin][col];
        }
    }

    return somaColunas;
}

// Função para gerar uma matriz 15x20 de números reais aleatórios
function gerarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.random() * 100);
        }
        matriz.push(linha);
    }
    return matriz;
}

let matriz = gerarMatriz(15, 20);

console.log("Matriz 15x20:");
matriz.forEach(linha => console.log(linha.join(" ")));

let somaColunas = somarColunas(matriz);

console.log("Soma de cada coluna:");
somaColunas.forEach((soma, index) => {
    console.log(`Coluna ${index + 1}: ${soma.toFixed(2)}`);
});