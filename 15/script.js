/*
    Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.
*/


function lerNumeros() {
    let numbers = [];
    let pares = [];
    let posicoes = [];

    for (let i = 0; i < 10; i++) {
        const number = prompt("Digite um numero: ");
        numbers.push(number);
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            pares.push(numbers[i]);
            posicoes.push(i);
        }
    }

    alert(`Os numeros digitados foram [${numbers}]`);
    alert(`Os numeros pares são [${pares}] e suas posições são, respectivamente, [${posicoes}]`);

}

lerNumeros();