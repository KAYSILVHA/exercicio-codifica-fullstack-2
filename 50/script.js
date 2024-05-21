/*
    50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
    deverá ser capaz de interagir com o usuário através do console do navegador e manter
    um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
    informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

        1. Estrutura de Dados:
        ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
        cidade, quartos totais e quartos disponiveis.
        ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
        nomeCliente.

        2. Funcionalidades:
        ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
        ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
        disponíveis em uma cidade específica.
        ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
        deve diminuir o número de quartos disponiveis do hotel.
        ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
        aumentar o número de quartos disponiveis no hotel correspondente.
        ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
        cliente.
        
        3. Regras de Negócio:
        ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
        ○ As reservas devem ser identificadas por um ID único e associadas a um
        único hotel.

        4. Desafios Adicionais (Opcionais):
        ○ Implementar uma função de check-in e check-out que atualize a
        disponibilidade de quartos.
        ○ Gerar relatórios de ocupação para um hotel.
        ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
        avaliações dentro do objeto do hotel.
*/


let hoteis = [];
let reservas = [];
let proximoIdReserva = 1;

function adicionarHotel(id, nome, cidade, quartosTotais) {
    let hotel = { id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais };
    hoteis.push(hotel);
}

function buscarHoteisPorCidade(cidade) {
    return hoteis.filter(hotel => hotel.cidade === cidade && hotel.quartosDisponiveis > 0);
}

function fazerReserva(idHotel, nomeCliente) {
    let hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel && hotel.quartosDisponiveis > 0) {
        let reserva = { idReserva: proximoIdReserva++, idHotel, nomeCliente };
        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        return reserva;
    }
    return null;
}

function cancelarReserva(idReserva) {
    let reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);
    if (reservaIndex !== -1) {
        let reserva = reservas[reservaIndex];
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        if (hotel) {
            hotel.quartosDisponiveis++;
        }
        reservas.splice(reservaIndex, 1);
        return true;
    }
    return false; 
}

function listarReservas() {
    return reservas.map(reserva => {
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        return { idReserva: reserva.idReserva, hotel: hotel.nome, cidade: hotel.cidade, nomeCliente: reserva.nomeCliente };
    });
}

adicionarHotel(1, "Hotel A", "Cidade A", 10);
adicionarHotel(2, "Hotel B", "Cidade B", 20);

let opcao = prompt("Escolha uma opção:\n1. Fazer Reserva\n2. Cancelar Reserva\n3. Listar Reservas");

switch (opcao) {
    case "1":
        let idHotelReserva = parseInt(prompt("Digite o ID do hotel para reserva:"));
        let nomeClienteReserva = prompt("Digite seu nome para a reserva:");
        let reservaFeita = fazerReserva(idHotelReserva, nomeClienteReserva);
        if (reservaFeita) {
            alert("Reserva feita com sucesso! ID da reserva: " + reservaFeita.idReserva);
        } else {
            alert("Não foi possível fazer a reserva. Verifique a disponibilidade de quartos.");
        }
        break;
    case "2":
        let idReservaCancelamento = parseInt(prompt("Digite o ID da reserva para cancelamento:"));
        if (cancelarReserva(idReservaCancelamento)) {
            alert("Reserva cancelada com sucesso!");
        } else {
            alert("Reserva não encontrada. Verifique o ID digitado.");
        }
        break;
    case "3":
        let listaDeReservas = listarReservas();
        if (listaDeReservas.length > 0) {
            alert("Lista de Reservas:\n" + JSON.stringify(listaDeReservas, null, 2));
        } else {
            alert("Não há reservas no momento.");
        }
        break;
    default:
        alert("Opção inválida. Escolha uma opção válida.");
}
