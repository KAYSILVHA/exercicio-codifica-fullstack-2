/*
    43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
    combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
    sobre as do obj1 em caso de conflitos.
*/

function combinarObjetos(obj1, obj2) {
    let novoObjeto = {};

    for (let propriedade in obj1) {
        novoObjeto[propriedade] = obj1[propriedade];
    }

    for (let propriedade in obj2) {
        novoObjeto[propriedade] = obj2[propriedade];
    }

    return novoObjeto;
}

let obj1 = { nome: "Maria", idade: 30 };
let obj2 = { idade: 35, cidade: "São Paulo" };

let novoObjeto = combinarObjetos(obj1, obj2);

console.log("Novo Objeto:", novoObjeto);
