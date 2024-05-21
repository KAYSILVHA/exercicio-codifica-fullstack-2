/*
    45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
    o número de vezes que a string aparece no array.
*/

function contarStrings(array) {
    let contador = {};

    array.forEach(function(string) {
        if (contador[string]) {
            contador[string]++; 
        } else {
            contador[string] = 1; 
        }
    });

    return contador;
}

let arrayStrings = ["apple", "banana", "apple", "orange", "banana", "apple"];

let objetoContador = contarStrings(arrayStrings);

console.log("Objeto contador:", objetoContador);
