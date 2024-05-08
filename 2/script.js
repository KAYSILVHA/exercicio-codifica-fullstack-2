/*
    2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
    exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, 
    cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

let velocidade = parseInt(prompt("Qual a velocidade do carro?"));

if (velocidade > 80) {
    const quilometrosAMais = velocidade - 80;
    let valorDaMulta = quilometrosAMais * 5;
    alert(`Você ultrapassou o limite de velocidade de 80KM/H. Você terá que pagar uma multa de ${valorDaMulta.toFixed(2)}`);
} else {
    alert(`Sua velocidade está dentro do permitido. Muito bem!`);
}


