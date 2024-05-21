/*
    38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
    variável identificadora que calcule a operação conforme a informação contida nesta
    variável:
        1- soma dos elementos;
        2- produto dos elementos;
        3- média dos elementos;
        4- ordene os elementos em ordem crescente;
        5- mostre o vetor.
*/

function ordenarVetor(vetor) {
    return vetor.sort((a, b) => a - b);
}

function calcular() {
    let vetor = [];

    for (let i = 0; i < 6; i++) {
        let elemento = parseInt(prompt(`Digite o elemento ${i + 1} do vetor:`), 10);
        vetor.push(elemento);
    }


    let identificador = parseInt(prompt("Digite a operação a ser realizada (1: soma, 2: produto, 3: média, 4: ordenar, 5: mostrar):"), 10);

    switch (identificador) {
        case 1: {
            let soma = vetor.reduce((acc, val) => acc + val, 0);
            alert("Soma dos elementos:", soma);
            break;
        }
        case 2: {
            let produto = vetor.reduce((acc, val) => acc * val, 1);
            alert("Produto dos elementos:", produto);
            break;
        }
        case 3: { 
            let soma = vetor.reduce((acc, val) => acc + val, 0);
            let media = soma / vetor.length;
            console.log("Média dos elementos:", media.toFixed(2));
            break;
        }
        case 4: {
            let vetorOrdenado = ordenarVetor(vetor);
            alert("Vetor ordenado:", vetorOrdenado.join(" "));
            break;
        }
        case 5: {
            alert("Vetor:", vetor.join(" "));
            break;
        }
        default:
            alert("Identificador inválido.");
            break;
    }
}

calcular();