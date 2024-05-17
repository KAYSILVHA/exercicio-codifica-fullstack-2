/*
    35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
    conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
    estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
    vetor pode ser preenchido quantas vezes forem necessárias.
*/

function classificarValores(valores) {
    let pares = [];
    let impares = [];
    
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            pares.push(valores[i]);
            if (pares.length === 5) {
                console.log("Vetor de pares cheio:", pares);
                pares = [];
            }
        } else {
            impares.push(valores[i]);
            if (impares.length === 5) {
                console.log("Vetor de ímpares cheio:", impares);
                impares = [];
            }
        }
    }

    if (pares.length > 0) {
        console.log("Valores restantes no vetor de pares:", pares);
    }
    
    if (impares.length > 0) {
        console.log("Valores restantes no vetor de ímpares:", impares);
    }
}

const valores = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

classificarValores(valores);
