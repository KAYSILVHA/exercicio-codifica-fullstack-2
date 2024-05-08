/*
    5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

function jogarJoKenPo() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura:').trim().toLowerCase();

    if (!opcoes.includes(escolhaUsuario)) {
        alert('Escolha inválida. Por favor, escolha Pedra, Papel ou Tesoura.');
        return;
    }

    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    alert('Você escolheu: ' + escolhaUsuario + '\nO computador escolheu: ' + escolhaComputador);

    if (escolhaUsuario === escolhaComputador) {
        alert('Empate!');
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        alert('Você ganhou!');
    } else {
        alert('Você perdeu!');
    }
}

jogarJoKenPo();