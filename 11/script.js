/*
    11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.
*/

function calcularPA(primeiroTermo, razao) {
    let termoAtual = primeiroTermo;
    let soma = 0;
    let elementos = [];

    for (let i = 0; i < 10; i++) {
        elementos.push(termoAtual);
        soma += termoAtual;
        termoAtual += razao;
    }

    return { elementos, soma };
}

const primeiroTermo = 1;
const razao = 2;

const resultado = calcularPA(primeiroTermo, razao);

console.log("Os 10 primeiros termos da PA são:", resultado.elementos);
console.log("A soma dos termos da PA é:", resultado.soma);
