/*
    6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.
*/


function jogoAdivinhacao() {
    const numeroSorteado = Math.floor(Math.random() * 50) + 1;
    let palpite;
    let tentativas = 0;

    alert("Bem-vindo ao jogo de adivinhação! Tente adivinhar um número entre 1 e 50.");

    while (true) {
        palpite = prompt("Digite seu palpite (ou 'sair' para sair do jogo):");

        if (palpite === 'sair') {
            alert("Obrigado por jogar!");
            break;
        }

        palpite = parseInt(palpite);

        if (isNaN(palpite) || palpite < 1 || palpite > 50) {
            alert("Por favor, digite um número entre 1 e 50.");
        } else {
            tentativas++;

            if (palpite === numeroSorteado) {
                alert(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas.`);
                break;
            } else {
                alert("Número errado. Tente novamente!");
            }
        }
    }
}

jogoAdivinhacao();