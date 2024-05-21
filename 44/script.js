/*
    44. Escreva uma função que conte quantas propriedades do tipo string existem em um
    objeto e retorne esse número.
*/

function contarPropriedadesString(objeto) {
    let contador = 0;

    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'string') {
            contador++;
        }
    }

    return contador;
}

let exemploObjeto = {
    nome: "Anna",
    idade: 30,
    cidade: "São Paulo",
    email: "anna@example.com"
};

let numeroStrings = contarPropriedadesString(exemploObjeto);

console.log("Número de propriedades do tipo string:", numeroStrings);
