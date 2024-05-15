/*
    Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados.
*/



function lerNomes() {
    let names = [];

    while (names.length < 7) {
        const name = prompt("Digite um nome: ");
        names.push(name);
    }

    alert(`A ordem reversa dos nomes é: [${names.reverse()}]`);

}

lerNomes();