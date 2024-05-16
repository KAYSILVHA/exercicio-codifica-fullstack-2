/*
    19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS.
*/

function lerHorarios() {
    const horarios = [];
    const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

    for (let i = 1; i <= 5; i++) {
        let horario = prompt(`Digite o ${i}º horário (HH:MM:SS): `);
        while (!regex.test(horario)) {
            alert("Formato de horário inválido. Por favor, digite no formato HH:MM:SS.");
            horario = prompt(`Digite o ${i}º horário (HH:MM:SS): `);
        }
        horarios.push(horario);
    }

    console.log("Horários digitados:");
    horarios.forEach((horario, index) => {
        alert(`${index + 1}: ${horario}`);
    });
}

lerHorarios();