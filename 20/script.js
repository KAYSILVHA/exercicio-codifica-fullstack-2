/*
    20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
        Matrícula:
        Nome:
        Salário bruto:
        Dedução INSS:
        Salário líquido:
    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    INSS).
*/

function calcularContracheque(matricula, nome, salarioBruto) {
    const deducaoINSS = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - deducaoINSS;

    console.log(`
    [
        Matrícula: ${matricula},
        Nome: ${nome},
        Salário líquido: ${salarioBruto},
        Dedução INSS: ${deducaoINSS},
        Salário líquido: ${salarioLiquido}
    ]`)
}

const funcionarios = [
    [1, "Funcionário 1", 2000],
    [2, "Funcionário 2", 2500],
];

for (const funcionario of funcionarios) {
    calcularContracheque(...funcionario);
}