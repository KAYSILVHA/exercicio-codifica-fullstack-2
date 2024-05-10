/*
    10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
*/

let soma = 0;
let menorValor;
let quantidade = 0;
let somaPares = 0;
let continuar;

do {
    const numero = parseFloat(prompt('Digite um número:'));

    soma += numero;

    if (menorValor === undefined || numero < menorValor) {
        menorValor = numero;
    }

    if (numero % 2 === 0) {
        somaPares += numero;
    }

    quantidade++;

    continuar = prompt('Deseja continuar? (s/n)').toLowerCase() === 's';
} while (continuar);

const media = soma / quantidade;

alert(`Somatório de todos os valores: ${soma}\nMenor valor digitado: ${menorValor}\nMédia entre os valores: ${media}\nQuantidade de valores pares: ${somaPares}`);