/*
    8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:

        - até 10 h de atividade no mês: ganha 2 pontos por hora
        - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
        - acima de 20 h de atividade no mês: ganha 10 pontos por hora
        - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)

    Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
    Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/



function calcPointsAndMoney() {
    let points;
    let money;
    const hours = prompt("Digite quantas horas você praticou atividade física durante este mês: ");

    if (hours <= 10) {
        points = hours * 2;
        money = points * 0.05;
    } else if (hours > 10 && hours <= 20) {
        points = hours * 5;
        money = points * 0.05;
    } else {
        points = hours * 10;
        money = points * 0.05;
    }

    alert(`Você acumulou ${points} pontos e faturou R$ ${money.toFixed(2)}`);
}

calcPointsAndMoney();