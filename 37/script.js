/*
    37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
    o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
    respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
    aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
    e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

function calcularNota(gabarito, respostasAlunos) {
    for (let i = 0; i < respostasAlunos.length; i++) {
        let respostas = respostasAlunos[i];
        let acertos = 0;

        for (let j = 0; j < gabarito.length; j++) {
            if (respostas[j] === gabarito[j]) {
                acertos++;
            }
        }

        console.log(`Aluno ${i + 1} teve ${acertos} acertos.`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

const gabarito = [
    "a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "a", "b", "d", "a", "a", "b", "c", "c", "d"
];

const respostasAlunos = [
    // Adicione aqui as respostas de 50 alunos, cada uma com 20 elementos
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "a", "b", "d", "a", "a", "b", "c", "c", "d"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
];

calcularNota(gabarito, respostasAlunos);