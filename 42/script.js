/*
    42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
    strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
    propriedades que são arrays.
*/

let dados = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua ABC",
        cidade: "São Paulo"
    },
    telefones: ["123456789", "987654321"],
    interesses: ["Esportes", "Música"]
};

function filtrarArrays(objeto) {
    let novoObjeto = {};
    for (let propriedade in objeto) {
        if (Array.isArray(objeto[propriedade])) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

let objetosArrays = filtrarArrays(dados);

console.log("Objeto com propriedades que são arrays:");
console.log(objetosArrays);
