/*
    3 - Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.
*/

let distancia = parseInt(prompt("Qual a distância que deseja percorrer em Km?"));

if (distancia <= 200) {
    const valor = distancia * 0.5;
    alert(`O valor cobrado será ${valor.toFixed(2)}`);
} else {
    const valor = distancia * 0.45;
    alert(`O valor cobrado será ${valor.toFixed(2)}`);
}

