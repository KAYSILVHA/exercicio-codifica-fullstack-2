/*
    Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:
    Carros populares
    - Até 100 Km percorridos: R$ 0,20 por Km
    - Acima de 100 Km percorridos: R$ 0,10 por Km
    Carros de luxo
    - Até 200 Km percorridos: R$ 0,30 por Km
    - Acima de 200 Km percorridos: R$ 0,25 por Km

*/


function calcularServico() {
    const options = ['popular', 'luxo'];
    let car;
    let days;
    let km;
    let value = 0;

    do {
        car = prompt('Escolha de carro: Popular ou de Luxo? ').trim().toLowerCase();
        if (!options.includes(car)) {
            alert('Escolha inválida. Por favor, escolha carro Popular ou carro de Luxo.');
        }
    } while (!options.includes(car));

    days = prompt('Por quantos dias você alugou o carro?');
    km = prompt('Quantos quilometros você percorreu?');

    if (car === "popular") {
        if (km <= 100) {
            value = km * 0.2;
            alert(`O valor cobrado será R$ ${value.toFixed(2)}`);
        } else {
            value = km * 0.3;
            alert(`O valor cobrado será R$ ${value.toFixed(2)}`);
        }
    }

    if (car === "luxo") {
        if (km <= 200) {
            value = km * 0.3;
            alert(`O valor cobrado será R$ ${value.toFixed(2)}`);
        } else {
            value = km * 0.25;
            alert(`O valor cobrado será R$ ${value.toFixed(2)}`);
        }
    }
}

calcularServico();