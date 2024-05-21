/*
    47. Crie uma função que transforme um objeto de entrada aplicando uma função
    fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
    resultados.
*/

function transformarObjeto(objeto, funcao) {
    let novoObjeto = {};

    for (let propriedade in objeto) {
        novoObjeto[propriedade] = funcao(objeto[propriedade]);
    }

    return novoObjeto;
}

function dobrarValor(valor) {
    return valor * 2;
}

let objetoEntrada = {
    a: 5,
    b: 10,
    c: 15
};

let novoObjeto = transformarObjeto(objetoEntrada, dobrarValor);

console.log("Novo Objeto:", novoObjeto);
