/*
    Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

function lerNumeros() {
    let numbers = [];
    while (numbers.length < 20) {
        let number = Math.floor(Math.random() * 100) + 1;
        numbers.push(number);
    }
    numbers.sort((a, b) => a - b);
    console.log('Números ordenados:', numbers);

}

lerNumeros();