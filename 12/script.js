/*
    Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function calcularFibonacci(n) {
    let fibonacci = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.slice(0, n);
}

const elementosFibonacci = calcularFibonacci(10);

console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:", elementosFibonacci.join(", "));