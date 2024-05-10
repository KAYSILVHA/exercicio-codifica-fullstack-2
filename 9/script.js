const funcionarios = {
    homens: [],
    mulheres: []
};

function cadastrarFuncionario() {
    const salario = prompt('Digite o salário do funcionário:');
    let sexo = prompt('Digite o sexo do funcionário (M/F):');

    while (sexo.toUpperCase() !== 'M' && sexo.toUpperCase() !== 'F') {
        alert('Sexo inválido. Digite M para masculino ou F para feminino.');
        sexo = prompt('Digite o sexo do funcionário (M/F):');
    }

    if (sexo.toUpperCase() === 'M') {
        funcionarios.homens.push(parseFloat(salario));
    } else if (sexo.toUpperCase() === 'F') {
        funcionarios.mulheres.push(parseFloat(salario));
    }

    const continuar = confirm('Cadastramos um funcionário. Deseja continuar cadastrando?');
    if (continuar) {
        cadastrarFuncionario();
    } else {
        const totalSalarioHomens = funcionarios.homens.reduce((acc, cur) => acc + cur, 0);
        const totalSalarioMulheres = funcionarios.mulheres.reduce((acc, cur) => acc + cur, 0);

        const totalHomens = funcionarios.homens.length;
        const totalMulheres = funcionarios.mulheres.length;

        alert(`Total de funcionários homens: ${totalHomens}\nTotal de salários dos homens: R$ ${totalSalarioHomens.toFixed(2)}\n\nTotal de funcionários mulheres: ${totalMulheres}\nTotal de salários das mulheres: R$ ${totalSalarioMulheres.toFixed(2)}
        `);
    }
}

cadastrarFuncionario();