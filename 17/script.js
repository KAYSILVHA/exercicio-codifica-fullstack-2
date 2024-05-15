/*
    Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.
*/

function lerPessoas() {
    const nomes = [];
    const idades = [];

    const capturarDados = () => {
        for (let i = 0; i < 9; i++) {
            const nome = capturarNome(i);
            const idade = capturarIdade(nome);
            nomes.push(nome);
            idades.push(idade);
        }

        const menoresDeIdade = nomes.filter((nome, index) => idades[index] < 18);
        alert('Pessoas menores de idade:', menoresDeIdade);
    };

    const capturarNome = (i) => {
        return prompt(`Digite o nome da ${i + 1}ª pessoa: `);
    };

    const capturarIdade = (nome) => {
        const idade = prompt(`Digite a idade de ${nome}: `);
        return Number(idade);
    };

    capturarDados();
}

lerPessoas();