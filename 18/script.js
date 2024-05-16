/*
    18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    um funcionário e ao final escreva o conteúdo do registro.
*/

function criarRegistro() {
    const registro = {
        nome: '',
        cargo: '',
        salario: 0
    };

    registro.nome = prompt('Digite o nome do funcionário: ');
    registro.cargo = prompt('Digite o cargo do funcionário: ');
    registro.salario = parseFloat(prompt('Digite o salário do funcionário: '));

    return registro;
}

function lerRegistro(registro) {
    alert('Registro do funcionário:');
    alert('Nome:', registro.nome);
    alert('Cargo:', registro.cargo);
    alert('Salário:', registro.salario.toFixed(2));
}

const funcionario = criarRegistro();
lerRegistro(funcionario);