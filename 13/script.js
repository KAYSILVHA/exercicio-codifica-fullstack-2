/*
    Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci.
 */

    function calcularFibonacci(n) {
        let fibonacci = [1, 1];
    
        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
    
        return fibonacci;
    }
    
    const tamanhoVetor = 15;
    const vetorFibonacci = calcularFibonacci(tamanhoVetor);
    
    console.log("O vetor preenchido com os primeiros 15 elementos da Sequência de Fibonacci é:");
    console.log(vetorFibonacci);