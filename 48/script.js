/*
    48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
    inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
    item em estoque. Escreva uma função que combine os inventários em um único objeto.
    Se um item aparecer em ambas as lojas, some as quantidades.
*/

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = {};

    for (let item in inventarioLojaA) {
        inventarioCombinado[item] = inventarioLojaA[item];
    }

    for (let item in inventarioLojaB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioLojaB[item];
        } else {
            inventarioCombinado[item] = inventarioLojaB[item];
        }
    }

    return inventarioCombinado;
}

let inventarioLojaA = {
    maçã: 10,
    banana: 15,
    laranja: 20
};

let inventarioLojaB = {
    banana: 5,
    abacaxi: 8,
    laranja: 12
};

let inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log("Inventário Combinado:", inventarioCombinado);
