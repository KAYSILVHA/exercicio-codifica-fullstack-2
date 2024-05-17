/*
    23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    diagonal principal são iguais a 1 e os demais são nulos.
*/

function criarEImprimirMatrizIdentidade(dimensao) {
    for (let i = 0; i < dimensao; i++) {
        let linha = '';
        for (let j = 0; j < dimensao; j++) {
            if (i === j) {
                linha += '1 ';
            } else {
                linha += '0 ';
            }
        }
        console.log(linha.trim());
    }
}

const dimensao = 7;
criarEImprimirMatrizIdentidade(dimensao);