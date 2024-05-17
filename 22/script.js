/*
    22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    350,00.
*/

function coletarDados() {
    let totalSalarios = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let countSalariosAte350 = 0;
    let numPessoas = 0;

    while (true) {
        let salario = parseFloat(prompt("Digite o salário (ou digite um valor negativo para sair):"));
        if (salario < 0) break;
        let numFilhos = parseInt(prompt("Digite o número de filhos:"));

        totalSalarios += salario;
        totalFilhos += numFilhos;
        numPessoas++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            countSalariosAte350++;
        }
    }

    if (numPessoas === 0) {
        console.log("Nenhum dado foi coletado.");
        return;
    }

    let mediaSalarios = totalSalarios / numPessoas;
    let mediaFilhos = totalFilhos / numPessoas;
    let percentualSalariosAte350 = (countSalariosAte350 / numPessoas) * 100;

    alert(`Média de salário: R$ ${mediaSalarios.toFixed(2)}`);
    alert(`Média de número de filhos: ${mediaFilhos.toFixed(2)}`);
    alert(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    alert(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalariosAte350.toFixed(2)}%`);
}

coletarDados();