/*
    39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
    vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/


function compactarVetor(A) {
    let B = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== null && A[i] >= 0) {
            B.push(A[i]);
        }
    }
    return B;
}

let vetorA = [
    5, 10, -3, 0, 8, null, 20, -15, 25, 0
];


let vetorB = compactarVetor(vetorA);

console.log("Vetor Resultante (Vetor B):");
console.log(vetorB);
